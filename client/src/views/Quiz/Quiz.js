import React, {useEffect, useState} from 'react'
import {Container, Col, Row,} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Quiz.css'
import axios from 'axios'

const Quiz = (props) => {
    const [answerChoice, setChoice] = useState(0);
    const [questionNum, setQuestion] = useState(0);
    const [wrong1, setWrong1] = useState(false);
    const [wrong2, setWrong2] = useState(false);
    const [wrong3, setWrong3] = useState(false);
    const [wrong4, setWrong4] = useState(false);
    const [questions, setQuestions] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [submitQ, setSubmit] = useState(false);


    function toggleQ(){
        setSubmit(true)
    }

    const answer1 = () => {
        setChoice(1);
    };
    const answer2 = () => {
        setChoice(2);
    };
    const answer3 = () => {
        setChoice(3);
    };
    const answer4 = () => {
        setChoice(4);
    };

    // fetch quiz questions
    useEffect(() => {
        axios.get('/questionData')
    .then(response => {
        setQuestions(response.data)
        setQuestion(Math.floor(Math.random() * response.data.data.length))
        answeredQuestions.push(questionNum)
        setLoading(false);
    })
    }, [])

    useEffect(() => {
        if(submitQ == true){
            setLoading(true)
            axios.post('/questionData/answer', {  
                question: questions.data[questionNum].question,
                answer: answerChoice}).then(response => {
                    if(response.data.success == 1){

                        while(true){
                            var nextQuestion;
                            nextQuestion = Math.floor(Math.random() * questions.data.length);
                            
                            if(answeredQuestions.length === questions.data.length && nextQuestion != questionNum){
                                setAnsweredQuestions([nextQuestion]);
                                setQuestion(nextQuestion);
                                break;
                            }
                            else if(answeredQuestions.indexOf(nextQuestion) === -1){
                                setAnsweredQuestions(answeredQuestions.concat(nextQuestion))
                                setQuestion(nextQuestion)
                                break;
                            }
                        }

                        setChoice(0);
                        setWrong1(false);
                        setWrong2(false);
                        setWrong3(false);
                        setWrong4(false);
                        axios.post('/users/addStar');
                    }
                    else{
                        switch (answerChoice){
                            case 1:
                                setWrong1(true);
                                break;
                            case 2:
                                setWrong2(true);
                                break;
                            case 3:
                                setWrong3(true);
                                break;
                            case 4:
                                setWrong4(true);
                                break;
                            default:
                                
                        }

                    }
            })
            setSubmit(false);
            setLoading(false)
        }
    }, [submitQ, answeredQuestions, questionNum])


    // if loading return loading screen
    if(isLoading) return <p>Loading</p>

    return (
        <div>
            <Container className='quiz-container'>
                <div><p className='question'>{questions.data[questionNum].question}</p></div>
                <div><button className={wrong1 ? 'btn btn-default btn-lg btn-block wrongAns' : 'btn btn-default btn-lg btn-block'} onClick={answer1}>{questions.data[questionNum].choices[0]}</button></div>
                <div><button className={wrong2 ? 'btn btn-default btn-lg btn-block wrongAns' : 'btn btn-default btn-lg btn-block'} onClick={answer2}>{questions.data[questionNum].choices[1]}</button></div>
                <div><button className={wrong3 ? 'btn btn-default btn-lg btn-block wrongAns' : 'btn btn-default btn-lg btn-block'} onClick={answer3}>{questions.data[questionNum].choices[2]}</button></div>
                <div><button className={wrong4 ? 'btn btn-default btn-lg btn-block wrongAns' : 'btn btn-default btn-lg btn-block'} onClick={answer4}>{questions.data[questionNum].choices[3]}</button></div>
                <Row>
                    <Col>
                    <Link to='/dashboard'>
                        <button className='btn btn-default btn-lg right'>Dashboard</button>
                    </Link>
                    </Col>
                    <Col>
                    <button className='btn btn-default btn-lg left' onClick={toggleQ}>Submit</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Quiz;

