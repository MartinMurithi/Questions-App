import React, { useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);

  const handleQuestionSubmit = (question) => {
    setQuestions([...questions, { question, answers: [] }]);
  };

  const handleAnswerSubmit = (index, answer) => {
    const newQuestions = [...questions];
    newQuestions[index].answers.push(answer);
    setQuestions(newQuestions);
  };

  return (
    <div>
      <QuestionForm onSubmit={handleQuestionSubmit} />
      <QuestionList questions={questions} onAnswerSubmit={handleAnswerSubmit} />
    </div>
  );
}

function QuestionForm({ onSubmit }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(question);
    setQuestion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question:
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>
      <button type="submit">Ask</button>
    </form>
  );
}

function QuestionList({ questions, onAnswerSubmit }) {
  return (
    <ul>
      {questions.map((q, i) => (
        <li key={i}>
          <h3>{q.question}</h3>
          <AnswerForm onSubmit={(answer) => onAnswerSubmit(i, answer)} />
          <AnswerList answers={q.answers} />
        </li>
      ))}
    </ul>
  );
}

function AnswerForm({ onSubmit }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answer);
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Answer:
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

function AnswerList({ answers }) {
  return (
    <ul>
      {answers.map((answer, i) => (
        <li key={i}>{answer}</li>
      ))}
    </ul>
  );
}
