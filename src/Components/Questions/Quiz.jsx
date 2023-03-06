import React, { useState } from "react";
import data from "./Data";
import "../Questions/Quiz.css";

function Quiz() {
  const [display, setDisplay] = useState(false);

  const handleToggleAns = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div className="quizDiv">
        <div className="header">
          <h1 className="title">Top Questions</h1>
          <button className="askQuizBtn">Ask Question</button>
        </div>

        <div className="dataList">
          {data.map((datum) => {
            return (
              <div className="dataQuiz">
                <h3 key={datum.id} className="quizItem">
                  {datum.question}
                </h3>
                <div className="quizDetails">
                  <button className="showHide" onClick={handleToggleAns}>
                    Show Answers
                  </button>
                  <h3 className="authorName">{datum.author}</h3>
                </div>
                    {display ?
                        <div className="res">
                            {datum.answers.map((datum) => {
                                return (
                                    <div className="ansDiv">
                                        <h3 className="answer" key={datum.id}>
                                            {datum.ans}
                                        </h3>
                                        <h3 className="ansOwner" key={datum.id}>
                                            {datum.by}
                                        </h3>
                                    </div>
                                );
                            })}
                        </div>
                        : null }
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Quiz;
