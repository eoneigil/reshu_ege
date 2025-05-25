import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container" style={{display: 'flex', alignItems: 'center'}}>
        <Link to="/" style={{textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
          <div style={{
            backgroundColor: '#4285f4',
            color: 'white',
            padding: '0.5rem',
            borderRadius: '4px',
            marginRight: '1rem',
            fontWeight: 'bold'
          }}>
            Главная
          </div>
        </Link>
        <ul className="nav-list" style={{marginLeft: 'auto'}}>
          <li><Link to="/verbs">Глаголы</Link></li>
          <li><Link to="/nouns">Существительные</Link></li>
          <li><Link to="/adjectives">Прилагательные</Link></li>
          <li><Link to="/numerals">Числительные</Link></li>
          <li><Link to="/participles">Причастия</Link></li>
          <li><Link to="/gerunds">Деепричастия</Link></li>
          <li><Link to="/adverbs">Наречия</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;