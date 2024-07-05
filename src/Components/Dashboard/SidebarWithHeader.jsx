import React, { useState, useEffect } from "react";
import { FaPiggyBank, FaHistory } from "react-icons/fa";
import { IoHomeOutline, IoBagHandleOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { PiHandWithdrawBold } from "react-icons/pi";
import "./SidebarWithHeader.css";

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
    <div className="contrib">
      <h3>Ongoing Contributions</h3>
      <ul>
        <li>Contribution 1: $100</li>
        <li>Contribution 2: $200</li>
        <li>Contribution 3: $300</li>
      </ul>
    </div>
  );
};

const SidebarWithHeader = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setModalContent('Dashboard Content');
  }, []);

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent('Dashboard Content');
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case 'Dashboard Content':
        return <div>Dashboard Content</div>;
      case 'Ongoing Contributions Content':
        return <OngoingContributionsContent />;
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
          <li onClick={() => handleOpenModal('Dashboard Content')}><IoHomeOutline className="icon" />Dashboard</li>
          <li onClick={() => handleOpenModal('Ongoing Contributions Content')}><IoBagHandleOutline className="icon"/>Ongoing Contributions</li>
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

export default SidebarWithHeader;