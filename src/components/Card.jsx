import React from "react";

const Card = ({ question, onButtonClick }) => (
  <div className="card-container bg-white bg-opacity-60 rounded-lg p-8 max-w-lg mx-auto my-10 shadow-md">
    <p className="text-4xl text-white">{question}</p>
    <button
      onClick={onButtonClick}
      className="mt-4 bg-blue-500 text-white rounded p-2"
    >
      Next Question
    </button>
  </div>
);

export default Card;
