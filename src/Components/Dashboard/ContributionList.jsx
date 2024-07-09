
import React from 'react'
import SidebarWithHeader from './SidebarWithHeader'
import "./ContributionList.css"

const ContributionList = () => {
  return (
    <div>
      <div className='ContributionList'>
        <div>
            <SidebarWithHeader/>
        </div>
        <div className="bodeleyi">
        
        <div className="contribution-list">
          <div className="header">
            <h2>Ongoing Contributions</h2>
           
          </div>
          <ul>
            
              <li  className="contribution-item">
                <div className="contribution-info">
                  <p className="contribution-title"><strong>Title:</strong> Contribution</p>
                  <p className="contribution-details fr"><strong>Amount:</strong> 2,000</p>
                  <p className="contribution-details fr"><strong>Description:</strong> Ajo Member</p>
                  <p className="contribution-details fr"><strong>Date:</strong> 12-10-2024</p>
                  <p className="contribution-details fr"><strong>Status:</strong> Active</p>
                </div>
             
              </li>
           
          </ul>
        </div>
        <div className="contribution-list">
          <div className="header">
            <h2>Ongoing Contributions</h2>
           
          </div>
          <ul>
            
              <li  className="contribution-item">
                <div className="contribution-info">
                  <p className="contribution-title"><strong>Title:</strong> Contribution</p>
                  <p className="contribution-details fr"><strong>Amount:</strong> 2,000</p>
                  <p className="contribution-details fr"><strong>Description:</strong> Ajo Member</p>
                  <p className="contribution-details fr"><strong>Date:</strong> 12-10-2024</p>
                  <p className="contribution-details fr"><strong>Status:</strong> Active</p>
                </div>
             
              </li>
           
          </ul>
        </div>
        <div className="contribution-list">
          <div className="header">
            <h2>Ongoing Contributions</h2>
           
          </div>
          <ul>
            
              <li  className="contribution-item">
                <div className="contribution-info">
                  <p className="contribution-title"><strong>Title:</strong> Contribution</p>
                  <p className="contribution-details fr"><strong>Amount:</strong> 2,000</p>
                  <p className="contribution-details fr"><strong>Description:</strong> Ajo Member</p>
                  <p className="contribution-details fr"><strong>Date:</strong> 12-10-2024</p>
                  <p className="contribution-details fr"><strong>Status:</strong> Active</p>
                </div>
             
              </li>
           
          </ul>
        </div>
  
        
      </div>
  
      </div>
    </div>
  )
}

export default ContributionList

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';
// import './ContributionList.css';

// const ContributionList = ({ contributions }) => {
//   return (
//     <div className="bodeleyi">
//       <div className="contribution-list">
//         <div className="header">
//           <h2>Ongoing Contributions</h2>
//           <Link to="/admin-dashboard" className="back-button">
//             <FaArrowLeft size={20} /> Back to Dashboard
//           </Link>
//         </div>
//         <ul>
//           {contributions.map((contribution, index) => (
//             <li key={index} className="contribution-item">
//               <p className="contribution-title"><strong>Title:</strong> {contribution.title}</p>
              
//               <p className="contribution-details fr"><strong>Amount:</strong> {contribution.amount}</p>
//               <p className="contribution-details fr"><strong>Description:</strong> {contribution.description}</p>
//               <p className="contribution-details fr"><strong>Date:</strong> {contribution.date}</p>
//               <p className="contribution-details fr"><strong>Status:</strong> {contribution.status}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ContributionList;


import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaTrash } from 'react-icons/fa';
import './ContributionList.css';




const ContributionList = ({ contributions, onEdit, onDelete }) => {
  return (



    
    <div className="bodeleyi">
        
      <div className="contribution-list">
        <div className="header">
          <h2>Ongoing Contributions</h2>
          <Link to="/admin-dashboard" className="back-button">
            <FaArrowLeft size={20} /> Back to Dashboard
          </Link>
        </div>
        <ul>
          {contributions.map((contribution, index) => (
            <li key={index} className="contribution-item">
              <div className="contribution-info">
                <p className="contribution-title"><strong>Title:</strong> {contribution.title}</p>
                <p className="contribution-details fr"><strong>Amount:</strong> {contribution.amount}</p>
                <p className="contribution-details fr"><strong>Description:</strong> {contribution.description}</p>
                <p className="contribution-details fr"><strong>Date:</strong> {contribution.date}</p>
                <p className="contribution-details fr"><strong>Status:</strong> {contribution.status}</p>
              </div>
              {/* <div className="contribution-actions">
                <button onClick={() => onEdit(contribution, index)} className="edit-button"><FaEdit size={20} /></button>
                <button onClick={() => onDelete(index)} className="delete-button"><FaTrash size={20} /></button>
              </div> */}
            </li>
          ))}
        </ul>
      </div>

      
    </div>
  );
};

export default ContributionList;

