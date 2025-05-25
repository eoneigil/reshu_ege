import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import exercisesData from '../data/exercises.json';

const TopicMenu = () => {
  const { part } = useParams();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    if (exercisesData[part]) {
      setTopics(exercisesData[part]);
    }
  }, [part]);

  return (
    <div className="topic-menu">
      <div className="topics-grid">
        {topics.map(topic => (
          <Link 
            key={topic.id} 
            to={`/${part}/${topic.id}`}
            className="topic-card"
          >
            {topic.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

function getPartName(part) {
  const names = {
    verbs: 'Глаголы',
    nouns: 'Существительные',
    adjectives: 'Прилагательные',
    numerals: 'Числительные',
    participles: 'Причастия',
    gerunds: 'Деепричастия',
    adverbs: 'Наречия',
  };
  return names[part] || part;
}

export default TopicMenu;