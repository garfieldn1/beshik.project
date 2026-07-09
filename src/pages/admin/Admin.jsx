import '../../../src/Global.css';
import React, { useState } from 'react';
import { useCatalog } from '../../store';

export default function Admin() {
  const { items, addItem, removeItem } = useCatalog();
  const [loginCode, setLoginCode] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const [imageData, setImageData] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (loginCode.trim() === 'kod12345') {
      setLoggedIn(true);
      setLoginMessage('Siz muvaffaqiyatli kirdingiz.');
    } else {
      setLoginMessage('Parol noto‘g‘ri. Iltimos qayta urinib ko‘ring.');
    }
    setLoginCode('');
  };

  const handleFileRead = (file) => {
    if (!file || !file.type.startsWith('image/')) {
      setMessage('Iltimos faqat rasm faylini yuklang.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImageData(reader.result);
      setMessage('Rasm tanlandi. Endi formani to‘ldiring.');
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      handleFileRead(file);
    }
  };

  const handleDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true);
    } else if (event.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileRead(file);
    }
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) {
      setMessage('Iltimos, sarlavha va tavsifni toʻldiring.');
      return;
    }

    addItem({
      title: title.trim(),
      description: description.trim(),
      image: imageData || 'https://via.placeholder.com/480x320?text=Beshik',
    });
    setTitle('');
    setDescription('');
    setImageData('');
    setMessage('Yangi katalog elementi muvaffaqiyatli qoʻshildi.');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setLoginMessage('');
    setMessage('');
    setImageData('');
    setTitle('');
    setDescription('');
  };

  if (!loggedIn) {
    return (
      <div className="admin-page container">
        <div className="admin-header">
          <h2>Admin Login</h2>
          <p>Faqatgina to‘g‘ri kod bilan admin panelga kirish mumkin.</p>
        </div>
        <form className="admin-form admin-login-form" onSubmit={handleLogin} autoComplete="off">
          <label>
            Kirish kodi
            <input
              type="password"
              value={loginCode}
              placeholder="Parol"
              name="admin-password"
              autoComplete="new-password"
              onChange={(e) => setLoginCode(e.target.value)}
              required
            />
          </label>
          <button className="btn admin-submit" type="submit">Kirish</button>
          {loginMessage && <p className="admin-message">{loginMessage}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="admin-page container">
      <div className="admin-header admin-header-with-action">
        <div>
          <h2>Catalog Admin Panel</h2>
          <p>Siz bu yerda yangi katalog elementlari qo‘shishingiz va mavjudlarini olib tashlashingiz mumkin.</p>
        </div>
        <button className="btn admin-logout" type="button" onClick={handleLogout}>
          Chiqish
        </button>
      </div>

      <form className="admin-form" onSubmit={handleAdd}>
        <label>
          Rasm yuklash
          <div
            className={`upload-dropzone ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {imageData ? (
              <img src={imageData} alt="Tanlangan rasm" className="upload-preview" />
            ) : (
              <div className="upload-instructions">
                <p>Rasmni shu yerga torting yoki faylni tanlang</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="upload-input"
              onChange={handleFileChange}
            />
          </div>
        </label>

        <label>
          Sarlavha
          <input
            type="text"
            value={title}
            placeholder="Beshik nomi"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Tavsif
          <textarea
            value={description}
            placeholder="Beshik haqida qisqacha tavsif"
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            required
          />
        </label>

        <button className="btn admin-submit" type="submit">Katalogga qo'shish</button>
        {message && <p className="admin-message">{message}</p>}
      </form>

      <div className="admin-list">
        <h3>Mavjud katalog elementlari</h3>
        {items.length === 0 ? (
          <p>Hozircha hech qanday element yo‘q.</p>
        ) : (
          <div className="grid admin-grid">
            {items.map((item) => (
              <div className="card admin-card" key={item.id}>
                <div className="card-img">
                  {item.image ? <img src={item.image} alt={item.title} /> : 'Rasm mavjud emas'}
                </div>
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="btn admin-delete" type="button" onClick={() => removeItem(item.id)}>
                    O'chirish
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
