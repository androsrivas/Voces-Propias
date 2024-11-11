import React from 'react';
import { Outlet } from 'react-router-dom';
import "./LayoutUser.css";

function LayoutUser() {
  return (
    <div className="LayoutUser">
      <div className="headerUser">
        <div className="logo">
          <img src="/src/assets/logo.png" alt="vocespropias" className="logo" />
          <p class="tagline">literatura desde los márgenes</p>

        </div>
        <div className="menu-mobile">
          <img src="/src/assets/mobile-menu.png" alt="Menú" className="icon-mobile" />
          <img src="/src/assets/user.png" alt="Usuario" className="icon-mobile" />
          <img src="/src/assets/fav.png" alt="Favoritos" className="icon-mobile" />
          <img src="/src/assets/cart.png" alt="Carrito" className="icon-mobile" />
        </div>
        <div className="menu-desktop">
          <nav className="menu-desktop">
            <ul className="menu-categories">
              <li><a href="#narrativa">Narrativa</a></li>
              <li><a href="#poesia">Poesía</a></li>
              <li><a href="#ensayo">Ensayo</a></li>
              <li><a href="#infantil">Infantil</a></li>
              <li><a href="#sobre-nosotras">Sobre nosotras</a></li>
            </ul>
            <div className="icons-desktop">
              <img src="/src/assets/user.png" alt="Usuario" className="icon-desktop" />
              <img src="/src/assets/fav.png" alt="Favoritos" className="icon-desktop" />
              <img src="/src/assets/cart.png" alt="Carrito" className="icon-desktop" />
            </div>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default LayoutUser;
