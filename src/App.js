import './App.css';
import Main from './Components/Main/Main';
import Nav from './Components/NavBar/Nav';
import Quiz from './Components/Questions/Quiz';
import QuizInput from './Components/QuizInput/QuizInput';
import Sample from './Components/Sample';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Main />
      <Quiz/>  */}
      <QuizInput />
    </div>
  );
}

export default App;
