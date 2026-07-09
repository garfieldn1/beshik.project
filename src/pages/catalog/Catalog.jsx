import '../../../src/Global.css'
import React from 'react';
import { useCatalog } from '../../store';

export default function Katalog() {
  const { items } = useCatalog();

  return (
    <div className="container reveal">
      <h2 style={{ color: '#8B5A2B', borderBottom: '2px solid #D4AF37', paddingBottom: '10px' }}>
        Beshiklarimiz Turlari
      </h2>
      <div className="grid">
        {items.length > 0 ? (
          items.map((item) => (
            <div className="card reveal" key={item.id}>
              <div className="card-img">
                {item.image ? <img src={item.image} alt={item.title} /> : 'Rasm mavjud emas'}
              </div>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-message">
            <p>Hozircha hech qanday katalog elementi yo‘q. Iltimos, admin panel orqali qo‘shing.</p>
          </div>
        )}
      </div>
    </div>
  );
}
