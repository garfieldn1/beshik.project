import '../../../src/Global.css'
import React from 'react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="wave-footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h3>🌙 Beshik.uz</h3>
            <p>Farzandingiz salomatligi va shirin uyqusi uchun eng ishonchli tanlov. Milliy qadriyatlarimiz asosida professional qo'l mehnati.</p>
          </div>
          
          <div className="footer-col">
            <h3>Sahifalar</h3>
            <ul>
              <li><a href="/" onClick={(e) => { e.preventDefault(); setActivePage('home'); }}>Bosh sahifa</a></li>
              <li><a href="/katalog" onClick={(e) => { e.preventDefault(); setActivePage('katalog'); }}>Katalog</a></li>
              <li><a href="/about" onClick={(e) => { e.preventDefault(); setActivePage('about'); }}>Biz haqimizda</a></li>
              <li><a href="/contact" onClick={(e) => { e.preventDefault(); setActivePage('contact'); }}>Aloqa</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Aloqa</h3>
            <p>📞 +998 33 700 94 92</p>
            <p>📍 O'zbekiston, Namangan shahri</p>
            <p>✉️ https://t.me/bbeshikk</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Beshik Yasash Xizmati. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}