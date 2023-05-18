import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTh, FaBars, FaUserAlt, FaCommentAlt } from 'react-icons/fa';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
// import './admin-panel.css'; // Import your CSS file for styling
// import './sidebar.css';
library.add(faUserPlus);
const AdminPanel = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
      {
        path: '/',
        name: 'Dashboard',
        icon: <FaTh />,
      },
      {
        path: '/SellerDetails',
        name: 'SellerDetails',
        icon: <FaUserAlt />,
      },
      {
        path: '/signup',
        name: 'SignUp',
        icon: <FontAwesomeIcon icon={faUserPlus} />,
      },
      {
        path: '/getUser',
        name: 'Comment',
        icon: <FaCommentAlt />,
      },
    ];
  
    return (
      <div className="container">
        <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebar">
          <div className="top_section">
            <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
              Logo
            </h1>
            <div
              style={{ marginLeft: isOpen ? '50px' : '0px' }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeClassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    );
  };
  
  export default AdminPanel;
  