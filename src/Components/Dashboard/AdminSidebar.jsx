import React, { useState, useEffect } from "react";
import { FaPiggyBank, FaHistory } from "react-icons/fa";
import { IoHomeOutline, IoBagHandleOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { PiHandWithdrawBold } from "react-icons/pi";
import "./AdminSidebar.css";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;
  
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

const OngoingContributionsContent = () => {
  return (
    <div className="ongoingcontribution">
      <h3>Ongoing Contributions</h3>
      <ul>
        <li>Contribution 1: $100</li>
        <li>Contribution 2: $200</li>
        <li>Contribution 3: $300</li>
      </ul>
    </div>
  );
};

const AddContributionContent = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ amount, description, date });
  };

  return (
    <div>
      <h3>Add New Contribution</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Contribution</button>
      </form>
    </div>
  );
};

const AdminSidebar = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     setModalContent('Dashboard Content');
//   }, []);

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent('Dashboard Content');
  };

  const handleAddContribution = (newContribution) => {
    console.log("New Contribution Added:", newContribution);
    // Handle the new contribution data
    handleCloseModal();
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case 'Dashboard Content':
        return <div>Dashboard Content</div>;
      case 'Ongoing Contributions Content':
        return <OngoingContributionsContent />;
      case 'Add Contribution Content':
        return <AddContributionContent onSubmit={handleAddContribution} />;
      case 'Wallets Content':
        return <div>Wallets Content</div>;
      case 'History Content':
        return <div>History Content</div>;
      case 'Withdraw Content':
        return <div>Withdraw Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <FaPiggyBank size={30} />
        <h2>iSave</h2>
      </div>

     
      <nav className="active">
        <ul>
          {/* <li onClick={() => handleOpenModal('Dashboard Content')}><IoHomeOutline className="icon" />Dashboard</li> */}
          <li onClick={() => handleOpenModal('Ongoing Contributions Content')}><IoBagHandleOutline className="icon"/>Ongoing Contributions</li>
          <li onClick={() => handleOpenModal('Add Contribution Content')}><IoBagHandleOutline className="icon"/>Add New Contribution</li>
          <li onClick={() => handleOpenModal('Wallets Content')}><CiWallet className="icon"/>Wallets</li>
          <li onClick={() => handleOpenModal('History Content')}><FaHistory className="icon"/>History</li>
          <li onClick={() => handleOpenModal('Withdraw Content')}><PiHandWithdrawBold className="icon"/>Withdraw</li>
        </ul>
      </nav>



      <div className="content">
        {isModalOpen ? (
          <Modal show={isModalOpen} onClose={handleCloseModal}>
            {renderModalContent()}
          </Modal>
        ) : (
          <div className="default-content">
            
          </div>
        )}
      </div>

    
    </div>
    
  );
};

export default AdminSidebar;
