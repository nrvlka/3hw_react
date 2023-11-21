import React from 'react';
import './App.js'
function Header() {
  return <header>Шапка сайта</header>;
}

function MainSection() {
  return <main>Главная страница сайта</main>;
}

function Footer() {
  return <footer>Подвал сайта</footer>;
}

function ContactSection() {
  return <aside>Контакты</aside>;
}

function Site() {
  return (
    <div>
      <Header />
      <MainSection />
      <Footer />
      <ContactSection />
    </div>
  );
}

export default Site;
