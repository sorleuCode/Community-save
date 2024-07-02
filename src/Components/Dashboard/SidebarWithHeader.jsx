import React from "react";
import "./SidebarWithHeader.css";
import { IoHomeOutline, IoBagHandleOutline} from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { PiHandWithdrawBold } from "react-icons/pi";
const SidebarWithHeader = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        {/* <h1>Community Savings</h1> */}
        <nav className="active">
          <ul  >
            <li > <IoHomeOutline className="icon"/> Dashboard</li>
            <li > <IoBagHandleOutline className="icon"/>Ongoing Contributions</li>
            <li> <CiWallet className="icon"/> Wallets</li>
            <li> <FaHistory className="icon"/> History</li>
            <li> <PiHandWithdrawBold className="icon"/> Withdraw</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarWithHeader;
