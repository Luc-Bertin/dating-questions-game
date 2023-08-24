import React, { useState } from "react";
import Card from "./components/Card";

const questions = [
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
];

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const pickRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestionIndex(randomIndex);
  };

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
