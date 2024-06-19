import React from 'react';
import '../styles/sidebar.css';

const SidebarItem = ({ text, onClick, icon }) => (
    <li>
      <a href="#" onClick={() => onClick(text)} className="nav-link text-white d-flex align-items-center">
        <i className={`${icon} me-2`}></i>
        <span>{text}</span>
      </a>
    </li>
  );
 
const Dropdown = ({ user }) => (
  <div className="dropdown">
    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
      <img src={user.image} alt="" width="32" height="32" className="rounded-circle me-2" />
      <strong className='user-name'>{user.name}</strong>
    </a>
    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
      <li><a className="dropdown-item" href="#">Profile</a></li>
      <li><a className="dropdown-item" href="#">Settings</a></li>
      <li><a className="dropdown-item" href="#">Sign out</a></li>
    </ul>
  </div>
);

const Sidebar = ({ items, user, onClickHandle }) => {

  const handleClick = (id) => {
    onClickHandle(id);
  };

  return (
    <div className={`d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar`} style={{ minHeight: '100vh' }}>
      <a href="/" className="mx-auto d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4 sidebar-title">Home</span>
        <i className={`fas fa-bars fs-4 sidebar-title-icon`} />
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {items.map((item,index) => (
          <SidebarItem key={item.text} id={index} href={item.href} text={item.text} icon={item.icon} onClick={handleClick} />
        ))}
      </ul>
      <hr />
      <Dropdown user={user} />
    </div>
  );
};

export const SidebarAdmin = ({ onClickHandle }) => {
  const username = localStorage.getItem("user_name")

  const items = [
    {  href: '/', text: 'Home', icon: 'fas fa-home' },
    {  href: '#', text: 'Articles', icon: 'fas fa-clipboard-list' },
    {  href: '#', text: 'Clients', icon: 'fas fa-users' },
    {  href: '#', text: 'Appointments', icon: 'fas fa-box' },
  ];

  const user = {
    name: username,
    image: 'https://github.com/mdo.png',
  };

  return <Sidebar items={items} user={user} onClickHandle={onClickHandle} />;
};
