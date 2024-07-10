// QuizGame.js
import React, { useState } from 'react';
import Question from './Question';
import Button from './Button';

const questions = [
    {
        question: "Mera Naam?",
        options: ["Naveen", "Sagar", "Cutu", "badmash"],
        correctAnswer: "Cutu"
    },
    {
        question: "Mera Fav Food",
        options: ["Bhindi", "Chatni", "churma", "Pratha"],
        correctAnswer: "Bhindi"
    },
    {
        question: "Fav drink?",
        options: ["100 pipers", "Carlsburg", " Tuborg", " Budwiser"],
        correctAnswer: "Carlsburg"
    },
    {
        question: "How much do you love me ?",
        options: ["To moon and back", "TO sun and back", "To hisar and back", "To mars and back"],
        correctAnswer: "To moon and back"
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
                setScore(score + 1);
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
            alert(`Quiz finished! Your score: ${score}/${questions.length}`);
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