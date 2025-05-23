import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import exercisesData from '../data/exercises.json';

const Exercise = () => {
  const { part, id } = useParams();
  const [exercise, setExercise] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (exercisesData[part]) {
      const foundExercise = exercisesData[part].find(ex => ex.id === parseInt(id));
      setExercise(foundExercise);
    }
  }, [part, id]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    if (selectedOption === exercise.questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption('');
    setShowResult(false);
  };

  if (!exercise) return <div>Загрузка...</div>;

  return (
    <div className="exercise">
      <div className="breadcrumbs">
        <Link to="/">Главная</Link>
        <span>›</span>
        <Link to={`/${part}`}>{getPartName(part)}</Link>
        <span>›</span>
        <span>{exercise.title}</span>
      </div>

      <h2>{exercise.title}</h2>
      
      {currentQuestion < exercise.questions.length ? (
        <div className="question">
          <h3>Вопрос {currentQuestion + 1} из {exercise.questions.length}</h3>
          <p>{exercise.questions[currentQuestion].text}</p>
          
          <div className="options">
            {exercise.questions[currentQuestion].options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                {option}
              </label>
            ))}
          </div>
          
          <button className="btn" onClick={checkAnswer}>Проверить</button>
          
          {showResult && (
            <div className="result">
              {selectedOption === exercise.questions[currentQuestion].answer ? (
                <p className="correct">Правильно!</p>
              ) : (
                <p className="incorrect">
                  Неправильно! Правильный ответ: {exercise.questions[currentQuestion].answer}
                </p>
              )}
              <button className="btn" onClick={nextQuestion}>
                {currentQuestion < exercise.questions.length - 1 ? 'Следующий вопрос' : 'Завершить тест'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="summary">
          <h3>Тест завершен!</h3>
          <p>Ваш результат: {score} из {exercise.questions.length}</p>
          <p>Процент правильных ответов: {Math.round((score / exercise.questions.length) * 100)}%</p>
          <Link to={`/${part}`} className="btn">Вернуться к темам</Link>
          <Link to="/" className="btn btn-outline" style={{marginLeft: '1rem'}}>На главную</Link>
        </div>
      )}
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
    pronouns: 'Местоимения'
  };
  return names[part] || part;
}

export default Exercise;