// Question.js
import React, { useState } from 'react';
import Button from './Button';

function Question({ question, options, onAnswer, correctAnswer, answered }) {
    const [answerStatus, setAnswerStatus] = useState({});

    const handleAnswer = (selectedAnswer) => {
        if (!answered) {
            const isCorrect = selectedAnswer === correctAnswer;
            setAnswerStatus({
                [selectedAnswer]: isCorrect ? 'correct' : 'incorrect'
            });
            onAnswer(isCorrect);
        }
    };

    return (
        <div className="question-container">
            <h2>{question}</h2>
            <div className="options">
                {options.map((option, index) => (
                    <Button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        text={option}
                        status={answerStatus[option]}
                        disabled={answered}
                    />
                ))}
            </div>
        </div>
    );
}

export default Question;