import '../../../src/Global.css'
import beshik from '../../../src/assets/beshik.png'
import aboutus from '../../../src/assets/aboutus.png'
import React from 'react';

export default function Home({ setActivePage }) {
  return (
    <div>
      <div className='herohero reveal'>
          <div className="hero">
            <h1 className='color title'>Farzandingiz uchun eng yaxshisi</h1>
            <p className='hero_p'>Tabiiy yog'ochdan, milliy an'analar asosida mehr bilan tayyorlangan professional beshiklar xizmati.</p>
            <button className="btn seecatalog" onClick={() => setActivePage('katalog')}>
              <a href="/Catalog">Katalogni ko'rish</a>
            </button>
          </div>
          <img className='beshik' src={beshik} alt="Beshik" />
      </div>
      <div className="container reveal" style={{ textAlign: 'center' }}>
        <h2>Nima uchun bizni tanlang?</h2>
        <p className="why-choose-text">
          Biz sizga nafaqat go‘zal, balki xavfsiz va mustahkam beshiklar ham taqdim etamiz. Har bir beshik ustalarimiz tomonidan qattiq sifat nazorati ostida tayyorlanadi va oila an’analarini hurmat qilgan holda jihozlanadi.
        </p>
        <div className="why-choose-row">
          <div className="why-card reveal">
            <img src={aboutus} alt="Ustalarimiz" />
            <h3>Ustalik va qadriyat</h3>
            <p>Har bir detal sinchkovlik bilan ishlanadi: o‘ymakorlik, barqarorlik va yaroqlilik birga.</p>
          </div>
          <div className="why-card reveal">
            <img src={beshik} alt="Toza yog'och" />
            <h3>Tabiiy materiallar</h3>
            <p>Faqat ekologik toza tol yog'och va an'anaviy usullar - farzandingiz sog'lig'i uchun ishonchli tanlov.</p>
          </div>
        </div>
      </div>

      <div className="stats-section reveal">
        <div className="stat-item reveal">
          <h3>15+</h3>
          <p>Yillik Tajriba</p>
        </div>
        <div className="stat-item reveal">
          <h3>2,500+</h3>
          <p>Yasalgan Beshiklar</p>
        </div>
        <div className="stat-item reveal">
          <h3>100%</h3>
          <p>Sog'lom va Xavfsiz</p>
        </div>
        <div className="stat-item reveal">
          <h3>99%</h3>
          <p>Mamnun Ota-onalar</p>
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Ommabop Beshiklarimiz</h2>
        <p className="section-subtitle">Xalqimiz tomonidan eng ko'p tanlanadigan modellar</p>

        <div className="grid">
          <div className="card">
            <div className="card-img" style={{ background: '#e5e5e5', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              [Klassik Beshik]
            </div>
            <div className="card-body">
              <h3 className="card-title">Klassik Milliy Beshik</h3>
              <p>Oddiy va qulay dizayn, milliy naqshlar bilan bezatilgan toza tol yog'ochidan.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img" style={{ background: '#e5e5e5', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              [O'ymakor Beshik]
            </div>
            <div className="card-body">
              <h3 className="card-title">Premium O'ymakor Beshik</h3>
              <p>Qo'l mehnati bilan chuqur o'yilgan naqshlar. Haqiqiy san'at asari.</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button className="btn" onClick={() => setActivePage('katalog')}>
           <a className='black' href="/catalog">Barcha Beshiklarni Ko'rish</a>
          </button>
        </div>
      </div>

      <div className="container home-about">
        <div className="home-about-text">
          <h2 style={{ color: '#8B5A2B', marginBottom: '15px' }}>Biz qanday ishlaymiz?</h2>
          <p style={{ marginBottom: '15px' }}>
            Biz ko'p yillik tajribaga ega sulolaviy beshikchi ustalarmiz. Har bir beshik faqat ekologik toza va quritilgan materiallardan foydalanilgan holda, jajji farzandlarimiz salomatligiga zarar yetkazmaydigan qilib ishlanadi.
          </p>
          <button className="btn" onClick={() => setActivePage('about')}>
           <a className='black' href="/about"> Batafsil ma'lumot</a>
          </button>
        </div>
        <div style={{ flex: 1, minWidth: '300px', height: '250px', background: '#e5e5e5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          [Ustalarning Ish Jarayoni Rasmi]
        </div>
      </div>

      <div className="container testimonials">
        <h2 className="section-title">Mijozlarimiz Nima Deyishadi?</h2>
        <p className="section-subtitle">Bizga ishonch bildirgan ota-onalarning fikrlari</p>

        <div className="grid">
          <div className="testimonial-card">
            <p>"Beshik juda ajoyib chiqibdi, o'ymakorlik naqshlariga gap yo'q. Eng muhimi juda mustahkam va yengil ekan. Rahmat ustalarga!"</p>
            <span className="client-name">- Dilshodbek M. (Toshkent)</span>
          </div>
          <div className="testimonial-card">
            <p>"Farzandimiz bu beshikda juda tinch uxlayapti. Bo'yoqlaridan hech qanday hid kelmadi, xavfsizligiga amin bo'ldik. Tavsiya qilaman."</p>
            <span className="client-name">- Nigora Axmedova (Samarqand)</span>
          </div>
        </div>
      </div>

      <div className="container faq-section" style={{ borderRadius: '12px' }}>
        <h2 className="section-title">Ko'p So'raladigan Savollar</h2>
        <p className="section-subtitle">Sizni qiziqtirgan savollarga javoblar</p>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="faq-item">
            <h4>Beshiklar qaysi yog'ochdan tayyorlanadi?</h4>
            <p>Biz asosan tol va yong'oq yog'ochlaridan foydalanamiz. Ular maxsus quritilgan bo'ladi, natijada vaqt o'tishi bilan qiyshayib yoki sinib ketmaydi.</p>
          </div>
          <div className="faq-item">
            <h4>Viloyatlarga yetkazib berish xizmati bormi?</h4>
            <p>Ha, O'zbekistonning barcha viloyat va shaharlariga kelishilgan holda xavfsiz yetkazib berish xizmati mavjud.</p>
          </div>
          <div className="faq-item">
            <h4>Buyurtma necha kunda tayyor bo'ladi?</h4>
            <p>Tayyor modellarimiz bo'lsa darhol yetkaziladi. Agar maxsus buyurtma (o'ymakor yoki ism yozilgan) bo'lsa, 3 kundan 7 kungacha vaqt ketishi mumkin.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button className="btn" onClick={() => setActivePage('contact')}>
            <a className='black' href="/contact">Savolingiz bormi? Bog'laning</a>
          </button>
        </div>
      </div>
    </div>
  );
}