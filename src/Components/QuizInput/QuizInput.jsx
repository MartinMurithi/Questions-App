import React, { useEffect, useState } from "react";
import "../QuizInput/QuizInput.css";

function QuizInput() {
  const [quizAuthor, setQuizAuthor] = useState("");
  const [quiz, setQuiz] = useState("");
  const [quizList, setQuizList] = useState([]);
  const [answer, setAnswer] = useState("");
  const [ansAuthor, setAnsAuthor] = useState("");
  const [displayAnsInput, setDisplayAnsInput] = useState(false);
  const [viewAnswer, setViewAnswer] = useState(false);
  const [displayAskQuestion, setAskQuestion] = useState(false);
  const [displayViewQuestions, setViewQuestion] = useState(false);
  const [post, setPost] = useState(false);

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
      owner: quizAuthor,
      answer: answer,
      answerAuthor: ansAuthor
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
  };

  const postAnswer = (id) => {
    quizList.map(item => {
      if (item.id === id) {
        console.log("anything");
        item.answerAuthor= ansAuthor;
        item.answer = answer;
        console.log(answer);
        console.log(quizList);
      }
    })
    setAnsAuthor("");
    setAnswer("");
    setPost(!post)
  }

  const handleAnswerQuestion = (id) => {
    quizList.map((item) => {
      if (item.id === id) {
        setDisplayAnsInput(!displayAnsInput);
      }
    });
  };

  const askQuestionBtn = () => {
    setAskQuestion(!displayAskQuestion);
  };

  const viewQuestionsBtn = () => {
    setViewQuestion(!displayViewQuestions);
  };

  const handleViewAns = (id) => {
    setViewAnswer(!viewAnswer);
  }

  useEffect(() => {
    console.log(45);
  }, [quizList])

  return (
    <>
      <div className="title">
        <h3 className="titleText">Ask a public question</h3>
        <button className="askBtn" onClick={askQuestionBtn}>
          Ask a Question
        </button>
        <button className="askBtn" onClick={viewQuestionsBtn}>
          View Questions
        </button>
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
      <div>
        {displayAskQuestion ? (
          <div>
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
          </div>
        ) : null}

        {/* VIEW ALL QUESTIONS */}
        {displayViewQuestions ? (
          <div className="questionsDiv">
              {
                quizList.map((elm) => {
                  return (
                    <div className="dataQuiz">
                      {/* QUESTION */}
                      <p key={elm.id} className="quizItem">{elm.question}</p>
                      <p className="asnItem">`Ans : {elm.answer}`</p>
                  <p className="quizAuthor">{elm.author}</p>

                  {/* ANSWER QUESTION BTN */}
                  <button className="answerBtn" onClick={() => { handleAnswerQuestion(elm.id) }}>Answer</button>
                  {displayAnsInput ? 
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
                      {/* POST ANS BTN */}
                      <button className="postAns" onClick={() => { postAnswer(elm.id) }}>
                        Post
                      </button>
                    </div>
                   : null}
                  {/* DELETE QUESTION BTN */}
                  <button
                    className="delete"
                    id="btn"
                    onClick={() => {
                      handleDelete(elm.id);
                    }}
                  >
                    Delete
                  </button>
                  {/* EDIT QUESTION BTN */}
                  <button
                    className="edit"
                    id="btn"
                    onClick={() => {
                      handleEditQuiz(elm.id);
                    }}
                  >
                    Edit
                  </button>

                  {/* INPUTS TO ANSWER A QUESTION */}
                  
                </div>
              );
                })
              }
          </div>
        ) : null}
      </div>
    </>
  );
}

export default QuizInput;
