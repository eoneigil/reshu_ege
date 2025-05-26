import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import TopicMenu from './components/TopicMenu';
import Exercise from './components/Exercise';
import './App.css';
import './mobile.css';

function App() {
  // Базовый URL берем из переменной окружения или используем '/reshu_ege' по умолчанию
  const basename = process.env.PUBLIC_URL || '/reshu_ege';

  return (
    <Router basename={basename}>
      <div className="App">
        <Header />
        <main className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={
                <div className="home">
                  <h1>Тренажёр по русскому языку</h1>
                  <p>Выберите раздел для тренировки правил русского языка.</p>
                  <Link to="/verbs" className="btn">Начать тренировку</Link>
                </div>
              } />
              <Route path="/:part" element={<TopicMenu />} />
              <Route path="/:part/:id" element={<Exercise />} />
            </Routes>
          </div>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <Link to="/">Главная</Link>
              <a href="#about">О проекте</a>
              <a href="#contacts">Контакты</a>
            </div>
            <div className="copyright">
              © {new Date().getFullYear()} Тренажёр по русскому языку. Все права защищены.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;