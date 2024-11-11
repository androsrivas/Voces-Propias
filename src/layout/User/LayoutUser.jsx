import React from 'react';
import { Outlet } from 'react-router-dom';
import "./LayoutUser.css";

function LayoutUser() {
  return (
    <div className="LayoutUser">
    <div className="header"></div>
    <img src="/src/assets/logo.png" alt="vocespropias" className="logo" /> {}

      <Outlet />
    </div>


  );
}

export default LayoutUser;
