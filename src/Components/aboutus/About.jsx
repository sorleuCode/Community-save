// import React from 'react';
// import './About.css';
// import Footer from '../footer/Footer';


// const About = () => {
//   return (
//     <div>
//       <nav className="navbar">
//         <div className="navbar-logo">iSave</div>
//         <ul className="navbar-links">
//           <li>About Us</li>
//           <li>Blog</li>
//           <li>FAQ</li>
//           <li>Contact</li>
//         </ul>
//         <button className="navbar-login">Log In</button>
//       </nav>
//       <div className='scon'>
//         <h1>About Us</h1>

        
//         <p>Get ready to transform your financial future with iSave, the ultimate weekly thrift collection app. Discover a world of smart savings tools, expert financial guidance, and a supportive community dedicated to helping you reach your goals. Join our weekly contribution plan, where you'll contribute a fixed amount alongside others with similar goals. Each week, our automatic selector will randomly choose a member to receive the collective contributions - a great way to boost your savings and achieve financial milestones.
//         At iSave, we understand the importance of security and transparency. That's why we utilize state-of-the-art encryption and adhere to strict data protection policies. Our platform is designed to provide a safe and reliable environment for your savings.
//         Wondering about our gain? Rest assured, we charge a minimal percentage, ensuring you get the most out of your savings. Unlike other platforms, iSave prioritizes your needs, offering:</p>
        
//         <ul className='life'>
//           <li>Reliability: Your savings are safe with us</li>
//           <li>Transparency: Clear and concise information about your savings</li>
//           <li>Top-notch security: State-of-the-art encryption and data protection</li>
//           <li>Expert financial guidance: Personalized advice to help you achieve your goals</li>
//           <li>Supportive community: Connect with like-minded individuals and stay motivated</li>
//         </ul>

//         <p>Join us today and start building your financial future! Take control of your savings, achieve your goals, and enjoy the benefits of being part of a supportive community. With iSave, you can:</p>
//         <ul className='life'>
//           <li>Boost your savings with our weekly contribution plan</li>
//           <li>Receive expert financial guidance and support</li>
//           <li>Connect with a community of like-minded individuals</li>
//           <li>Enjoy peace of mind with our secure and reliable platform</li>
//         </ul>
//         <p>Don't miss out on this opportunity to transform your financial future. Download iSave now and start thriving</p>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import './About.css';
import Footer from '../footer/Footer';

const About = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">iSave</div>
        <ul className="navbar-links">
          <li>About Us</li>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
        <button className="navbar-login">Log In</button>
      </nav>
      <div className="scon">
        <h1>About Us</h1>
        <p>Get ready to transform your financial future with iSave, the ultimate weekly thrift collection app. Discover a world of smart savings tools, expert financial guidance, and a supportive community dedicated to helping you reach your goals. Join our weekly contribution plan, where you'll contribute a fixed amount alongside others with similar goals. Each week, our automatic selector will randomly choose a member to receive the collective contributions - a great way to boost your savings and achieve financial milestones. At iSave, we understand the importance of security and transparency. That's why we utilize state-of-the-art encryption and adhere to strict data protection policies. Our platform is designed to provide a safe and reliable environment for your savings. Wondering about our gain? Rest assured, we charge a minimal percentage, ensuring you get the most out of your savings. Unlike other platforms, iSave prioritizes your needs, offering:</p>
        <ul className="life">
          <li>1.Reliability: Your savings are safe with us</li>
          <li>2.Transparency: Clear and concise information about your savings</li>
          <li>3.Top-notch security: State-of-the-art encryption and data protection</li>
          <li>4.Expert financial guidance: Personalized advice to help you achieve your goals</li>
          <li>5.Supportive community: Connect with like-minded individuals and stay motivated</li>
        </ul>
        <p>Join us today and start building your financial future! Take control of your savings, achieve your goals, and enjoy the benefits of being part of a supportive community. With iSave, you can:</p>
        <ul className="life">
          <li>1.Boost your savings with our weekly contribution plan</li>
          <li>2.Receive expert financial guidance and support</li>
          <li>3.Connect with a community of like-minded individuals</li>
          <li>4.Enjoy peace of mind with our secure and reliable platform</li>
        </ul>
        <p>Don't miss out on this opportunity to transform your financial future. Download iSave now and start thriving</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;

