import '../../../src/Global.css'
import about from '../../assets/aboutus.png'
import React from 'react';

function About() {
  return (
    <div className='scontainer reveal'>
      <div className="container reveal">
        <h2 style={{ color: '#8B5A2B', marginBottom: '20px' }}>Biz haqimizda</h2>
        <p style={{ fontSize: '18px', marginBottom: '15px' }}>
          Biz ko'p yillik tajribaga ega bo'lgan sulolaviy beshikchi ustalarmiz. Maqsadimiz — xalqimizning milliy qadriyatlarini saqlab qolgan holda, jajji farzandlarimiz uchun sog'lom va qulay beshiklar yetkazib berishdir.
        </p>
        <p style={{ fontSize: '18px' }}>
          Har bir buyurtma ustaning qo'l mehnati va qalb qo'ri bilan tayyorlanadi. Mahsulotlarimiz ekologik toza va xavfsiz bo'yoqlar bilan ishlov beriladi.
        </p>
        <button className="cta reveal">Biz bilan bog'laning</button>
      </div>
      <img className="reveal" src={about} alt="Biz haqimizda" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
    </div>
  );
}

export default About;