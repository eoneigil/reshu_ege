import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import TopicMenu from './components/TopicMenu';
import Exercise from './components/Exercise';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="content">
          <div className="container">
            <Routes>
              <Route path="/:part" element={<TopicMenu />} />
              <Route path="/:part/:id" element={<Exercise />} />
              <Route path="/" element={
                <div className="home">
                  <h1>Тренажёр по русскому языку</h1>
                  <p>Выберите раздел для тренировки правил русского языка. Подготовьтесь к ЕГЭ эффективно!</p>
                  <Link to="/verbs" className="btn">Начать тренировку</Link>
                </div>
              } />
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