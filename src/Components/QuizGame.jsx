// QuizGame.js
import React, { useState } from 'react';
import Question from './Question';
import Button from './Button';

const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },

    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
        correctAnswer: "Oxygen"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        correctAnswer: "Tokyo"
    }
];
function QuizGame() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const handleAnswer = (isCorrect) => {
        if (!answered) {
            if (isCorrect) {
                setScore(score + 10);
            }
            setAnswered(true);
        }
    };
    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setAnswered(false);
        } else {
            // Quiz finished
            alert(`Quiz finished! Your score: ${score}/${questions.length * 10}`);
        }
    };
    return (
        <div className="quiz-game">
            <Question
                question={questions[currentQuestion].question}
                options={questions[currentQuestion].options}
                onAnswer={handleAnswer}
                correctAnswer={questions[currentQuestion].correctAnswer}
                answered={answered}
            />
            <Button
                onClick={handleNext}
                text="Next"
                disabled={!answered}
            />
            <div className="score">Score: {score}</div>
        </div>
    );
}
export default QuizGame;