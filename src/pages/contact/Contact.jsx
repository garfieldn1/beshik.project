import '../../../src/Global.css'
import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!name.trim() || !phone.trim() || !message.trim()) {
            setStatus('Iltimos barcha maydonlarni toldiring.');
            return;
        }

        setLoading(true);
        setStatus('Yuborilmoqda...');

        try {
            const botToken = '8687825232:AAEvhVNFEDzG3dqUUMMhTOsjxeb_RYnNd3I';
            const chatId = '6465627311';
            
            const telegramMessage = `📧 Yangi buyurtma:\n👤 Ism: ${name}\n📞 Telefon: ${phone}\n💬 Xabar: ${message}`;

            const response = await fetch(
                `https://api.telegram.org/bot${botToken}/sendMessage`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: telegramMessage,
                    }),
                }
            );

            if (response.ok) {
                setStatus('Xabar muvaffaqiyatli yuborildi! Tez orada siz bilan bog lanamiz.');
                setName('');
                setPhone('');
                setMessage('');
            } else {
                setStatus('Xabar yuborishda xatolik yuz berdi. Iltimos qayta urinib koring.');
            }
        } catch (error) {
            setStatus('Xabar yuborishda xatolik yuz berdi. Internetni tekshiring.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container reveal">
            <h2 style={{ textAlign: 'center', color: '#8B5A2B' }}>Biz bilan bogʻlaning</h2>
            <p style={{ textAlign: 'center', color: '#666' }}>
                Buyurtma berish yoki savollaringiz boʻlsa, quyidagi formani toʻldiring:
            </p>

            <form className="contact-form reveal" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Ismingiz"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        placeholder="Telefon raqamingiz"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        placeholder="Xabaringiz yoki buyurtma tafsilotlari"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn" disabled={loading}>
                    {loading ? 'Yuborilmoqda...' : 'Yuborish'}
                </button>
                {status && <p className={`form-status ${status.includes('muvaffaqiyatli') ? 'success' : 'error'}`}>{status}</p>}
            </form>
        </div>
    );
}