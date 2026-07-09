import '../../../src/Global.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ activePage, setActivePage }) {
  const [open, setOpen] = useState(false);

  const handleLink = (page) => {
    if (setActivePage) {
      setActivePage(page);
    }
    setOpen(false);
  }

  return (
    <nav className="navbar">
      <a href="/" className="nav-logo" onClick={() => handleLink('home')}>
        🌙 Beshik.uz
      </a>

      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        aria-label="Menyu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li>
          <Link
            to="/"
            onClick={() => handleLink('home')}
            style={{ color: activePage === 'home' ? '#D4AF37' : '' }}
          >
            Bosh sahifa
          </Link>
        </li>
        <li>
          <Link
            to="/Catalog"
            onClick={() => handleLink('katalog')}
            style={{ color: activePage === 'katalog' ? '#D4AF37' : '' }}
          >
            Katalog
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            onClick={() => handleLink('about')}
            style={{ color: activePage === 'about' ? '#D4AF37' : '' }}
          >
            Biz haqimizda
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            onClick={() => handleLink('contact')}
            style={{ color: activePage === 'contact' ? '#D4AF37' : '' }}
          >
            Aloqa
          </Link>
        </li>
        <li>
          <Link
            to="/admin"
            onClick={() => handleLink('admin')}
            style={{ color: activePage === 'admin' ? '#D4AF37' : '' }}
          >
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
}