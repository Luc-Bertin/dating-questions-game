import React, { useState, useEffect } from "react";
import Card from "./components/Card";

const initialQuestions = [
  "Would you like to be famous? In what way?",
  "Do you often record again 10 times the same whatsapp audio before sending it ?",
  "What would constitute a “perfect” day for you?",
  "For what in your life do you feel most grateful?",
  "What is your biggest achievement?",
  "What's your favorite color?",
  "If you could change anything about the way you were raised, what would it be?",
  "What is your best memory?",
  "What is your most terrible memory?",
  "Your most embarrassing moment in your life?",
  "What, if anything, is too serious to be joked about?",
  "What's an issue you deal with every day basis?",
  "When did you last cry in front of another person? By yourself?",
  "Cat or Dog person?",
  "Who's the person you tell everything about ?",
  "If you were to write about someone who would it be?",
  "What are the nicknames people call you at home/school/work?",
  "What do you think falling in love feels like?",
  "In friendship or love: do you prefer to give or receive?",
  "What good things happened to you this summer?",
  "Where do you see yourself in 5 years?",
];

const App = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [questionIndex, setQuestionIndex] = useState(0);

  const pickRandomQuestion = () => {
    // Make a copy of the current questions except the one being removed
    const newQuestions = questions.filter(
      (_, index) => index !== questionIndex
    );

    // Pick a random index from the updated questions list
    const randomIndex = Math.floor(Math.random() * newQuestions.length);

    setQuestions(newQuestions);
    setQuestionIndex(randomIndex);
  };

  useEffect(() => {
    console.log("total questions:", questions.length);
    if (questions.length === 0) {
      // Handle the case when no questions are left, like resetting the questions
      setQuestions(initialQuestions);
      setQuestionIndex(Math.floor(Math.random() * initialQuestions.length));
    }
  }, [questions]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-blue-500 to-green-300">
      <Card
        question={questions[questionIndex]}
        onButtonClick={pickRandomQuestion}
      />
    </div>
  );
};

export default App;
