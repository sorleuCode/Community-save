import React, { Component } from "react";
import "./Selector.css";

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "circle",
      users: Array.from({ length: 12 }, (_, i) => i + 1), // 1 to 12
      selectedUser: null
    };
  }

  componentDidMount() {
    this.scheduleMonthlySelection();
  }

  scheduleMonthlySelection = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const timeUntilEndOfMonth = lastDayOfMonth.getTime() - now.getTime();

    setTimeout(() => {
      this.startRotation();
      // Schedule to run at the end of each subsequent month
      setInterval(this.startRotation, this.getMillisecondsUntilNextMonth());
    }, timeUntilEndOfMonth);
  }

  getMillisecondsUntilNextMonth = () => {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    return nextMonth.getTime() - now.getTime();
  }

  startRotation = () => {
    this.setState({
      name: "circle start-rotate"
    });
    setTimeout(() => {
      const selectedUser = this.selectRandomUser();
      this.setState((prevState) => ({
        name: "circle start-rotate stop-rotate",
        selectedUser,
        users: prevState.users.filter(user => user !== selectedUser)
      }), () => {
        if (this.state.users.length === 0) {
          // Reset users once all have been selected
          this.setState({ users: Array.from({ length: 12 }, (_, i) => i + 1) });
        }
      });
    }, Math.floor(Math.random() * 10000) + 1);
  }

  selectRandomUser = () => {
    const { users } = this.state;
    return users[Math.floor(Math.random() * users.length)];
  }

  render() {
    const { selectedUser, users } = this.state;

    return (
      <div>
        <div className="arrow"></div>
        <ul className={this.state.name}>
          {users.map((user, index) => (
            <li key={index}>
              <div className="text" contentEditable="true" spellCheck="false">
                {user}
              </div>
            </li>
          ))}
        </ul>
        {selectedUser !== null && (
          <div className="selected-user">Selected User ID: {selectedUser}</div>
        )}
      </div>
    );
  }
}

export default Selector;