import React, { useState } from "react";
import "../QuizInput/QuizInput.css";

function QuizInput() {
  const [quizAuthor, setQuizAuthor] = useState("");
  const [quiz, setQuiz] = useState("");
  const [quizList, setQuizList] = useState([]);
  const [answer, setAnswer] = useState("");
  const [ansAuthor, setAnsAuthor] = useState("");
  const [displayAnsInput, setDisplayAnsInput] = useState(false);
  const [viewReplies, setViewReplies] = useState(false);

  const handleQuizAuthor = (e) => {
    setQuizAuthor(e.target.value);
  };

  const handleQuiz = (e) => {
    setQuiz(e.target.value);
  };

  const handleEditQuiz = (id, event) => {
    //remove the selected item from the list
    let newList = quizList.filter((item) => {
      if (id === item.id) {
        return false;
      } else {
        return true;
      }
    });
    console.log(newList);
    setQuizList(newList);

    //find the selected item and take its values
    quizList.find((elm) => {
      if (id === elm.id) {
        setQuizAuthor(elm.author);
        setQuiz(elm.question);
      }
    });
    return;
  };

  const addQuestions = (e) => {
    const question = {
      id: Math.round(Math.random() * 10000),
      question: quiz,
      author: quizAuthor
      
    };
    setQuizList([...quizList, question]);
    setQuizAuthor("");
    setQuiz("");
    console.log(quizList);
  };

  const handleDelete = (id) => {
    let newQuizList = quizList.filter((elm) => {
      if (id === elm.id) {
        return false; //this will remove the item
      } else {
        return true;
      }
    });
    setQuizList(newQuizList);
  };

  const handleAnsAuthor = (event) => {
    setAnsAuthor(event.target.value);
  };

  const handleAnswer = (event) => {
    setAnswer(event.target.value);
  }

  const handleAddAns = () => {
    quizList.map(item => {
      item.answer = answer;
      item.ansAuthor = ansAuthor
    })
    setQuizList([...quizList]);
    console.log(quizList);
  }

  const handleToggleAns = (id) => {
    quizList.map(item => {
      if (id === item.id) {
        setDisplayAnsInput(!displayAnsInput);
      }
      
    })
    
  };

  return (
    <>
      <div className="title">
        <h3 className="titleText">Ask a public question</h3>
      </div>

      <div className="guideDiv">
        <h2 className="guideTitle">Writing a good question</h2>
        <p className="guideIntro">
          You're ready to ask a programming-related question and this form will
          help guide you through the process. Looking to ask a non-programming
          question? See the topics here to find a relevant site.
        </p>
        <h5 className="guideListTitle">Steps</h5>
        <ul className="guideList">
          <li className="guideItem">Write your name</li>
          <li className="guideItem">
            Summarize your problem in a one-line title
          </li>
          <li className="guideItem">Describe your problem in more detail</li>
          <li className="guideItem">
            Describe what you tried and what you expected to happen
          </li>
          <li className="guideItem">
            Review your question and post it to the site
          </li>
        </ul>
      </div>
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter your name"
          className="authorName"
          value={quizAuthor}
          onChange={handleQuizAuthor}
        />
        <textarea
          name=""
          className="quizBox"
          cols="30"
          rows="10"
          placeholder="Ask Question"
          value={quiz}
          onChange={handleQuiz}
        ></textarea>
      </div>
      <div className="btns">
        <button className="cancelBtn">Cancel</button>
        <button className="postBtn" onClick={addQuestions}>
          Post
        </button>
      </div>
      <div className="empty">
        {quizList.map((elm) => {
          return (
            <div className="dataQuiz">
              {/* QUESTION */}
              <h3 key={elm.id} className="quizItem">
                {elm.question}
              </h3>
              <h3 className="authorName">{elm.author}</h3>

              {/* ANSWER QUESTION BTN */}
              <button className="answer" onClick={() => { handleToggleAns(elm.id) }}>
                Answer
              </button>
              {/* DELETE QUESTION BTN */}
              <button
                className="delete"
                onClick={() => {
                  handleDelete(elm.id);
                }}
              >
                Delete
              </button>
              {/* EDIT QUESTION BTN */}
              <button
                className="edit"
                onClick={() => {
                  handleEditQuiz(elm.id);
                }}
              >
                Edit
              </button>
              {/* HIDE/VIEW ANSWER */}
              <button className="showAns">View Answers</button>
              {/* INPUTS TO ANSWER A QUESTION */}
              {displayAnsInput ? (
                <div className="answers">
                  <input
                    type="text"
                    value={ansAuthor}
                    className="ansAuthor"
                    placeholder="Enter your name"
                    onChange={handleAnsAuthor}
                  />
                  <textarea
                    name=""
                    id="answer"
                    cols="30"
                    rows="10"
                    placeholder="Enter your answer"
                    onChange={handleAnswer}
                  ></textarea>
                  <button className="cancelAns">Cancel</button>
                  {/* EDIT ANS BTN */}
                  <button className="editAns">Edit</button>
                  {/* POST ANS BTN */}
                  <button className="postAns" onClick={handleAddAns}>Post</button>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default QuizInput;
