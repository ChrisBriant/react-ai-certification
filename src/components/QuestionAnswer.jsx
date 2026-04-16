import { useState } from "react";

const QuestionAnswer = ({question, setSelectedQuestionAndAnswer, finish, onComplete}) => {
    const [answerText, setAnswerText] = useState("");

    return (
        <div className="panel questionPanel">

            {
                finish
                ? <>
                    <h2>Thank you for answering the questions, please press finish to complete the assessment.</h2>
                    <button className="artifact-button" onClick={() => onComplete()} >Finish</button>
                </>  
                : <>
                    <h2>{question.id} {question.text}</h2>
                    <textarea name="answer" id="answer" value={answerText} onChange={(evt) => setAnswerText(evt.currentTarget.value)}></textarea>
                    <button className="artifact-button" onClick={() => {setSelectedQuestionAndAnswer(answerText); setAnswerText("");}} >Next</button>
                </> 
                
                
            }
        </div>
    );
}

export default QuestionAnswer;  