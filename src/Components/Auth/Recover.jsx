// import React from 'react'
// import "../Auth/Login.css"

const Recover = () => {
  return (

<div className="container">
  <form action="reoverPasswordFrom">
    <label htmlFor="email" >Email</label>
    <input type="email" placeholder="exaple@gemail.com" name="email" required />
    <button type="submit">Send Recovery Email</button>
  </form>
  <p id="message"></p>
</div>
  )
}

export default Recover