import { useState } from "react";
import QuestionAnswer from "../components/QuestionAnswer";
import { getGroups } from "../network/network";
import LoadingWidget from "../components/LoadingWidget";


const InterviewPage = ({setPageName, questions, setResults}) => {
    const [selectedQuestion,setSelectedQuestion] = useState(0);
    const [questionAnswers, setQuestionAnswers] = useState([...questions]);
    const [finish, setFinish] = useState(false); 
    const [loading,setLoading] = useState(false);

    const setSelectedQuestionAndAnswer = (answer) => {
        const nextQuestion = selectedQuestion + 1;
        if(nextQuestion === questions.length) {
            setFinish(true);
        }
        const newQuestionAnswers = [...questionAnswers];
        newQuestionAnswers[selectedQuestion].answer = answer;
        setQuestionAnswers(newQuestionAnswers);
        setSelectedQuestion(nextQuestion);
        //Set the last question flag if at the end

    }  

    const onComplete = async () => {
        setLoading(true);
        console.log("SUBMITTING", questionAnswers);

        const payload = {
            user_answers : questionAnswers
        }
        //send the data to the back end
        try {
            const res = await getGroups(payload);
            console.log("GROUPS RESPONSE", res);
            setResults(res);
            setPageName("results");
        } catch(err) {
            console.error("Error getting certification results", err)
        }

        setTimeout(() => {
            setLoading(false);
        },3000);

    }

    return(
        <div >
            <div className="panel">
                <h2>Access Assessment Questions</h2>
                <h3>Please answer a few questions to help us determine the appropriate access for your role.</h3>
            </div>
            <>
            {
                loading
                ? <LoadingWidget />
                : <QuestionAnswer 
                    question={questions[selectedQuestion]} 
                    setSelectedQuestionAndAnswer={setSelectedQuestionAndAnswer} 
                    finish={finish}
                    onComplete={onComplete}
                />
            }
            </>
            


        </div>
    )
}

export default InterviewPage;