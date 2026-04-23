import { useState, useEffect } from 'react'
import './App.css'
import questionData from './data/questions.json' assert { type: 'json' };
import HomePage from './pages/HomePage';
import InterviewPage from './pages/InterviewPage';
import Banner from './components/Banner';
import ResultsPage from './pages/ResultsPage';


function App() {
  const [pageName,setPageName] = useState("home");
  const [answeredQuestions, setAnsweredQuestions] = useState([...questionData.questions]);
  const [results,setResults] = useState(null)


  return (
    <>
      <Banner />
      {
        pageName === "home"
        ? <HomePage setPageName={setPageName} />
        : null
      }
      {
        pageName === "interview"
        ? <InterviewPage setPageName={setPageName} questions={questionData.questions} setResults={setResults} />
        : null
      }
      {
        pageName === "results"
        ? <ResultsPage results={results} setPageName={setPageName} />
        : null
      }
    </>
  )
}

export default App
