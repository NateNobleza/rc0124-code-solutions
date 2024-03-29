import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './AppDrawer.css';

function AppDrawer({ menuItems = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`app-drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-toggle" onClick={toggleDrawer}>
        <FaBars />
      </div>
      <div className="menu">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} onClick={toggleDrawer}>
                <img src={item.icon} alt={item.name} />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppDrawer;
