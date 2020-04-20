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

    // fetch quiz questions
    useEffect(() => {
        axios.get('/questionData')
    .then(response => {
        setQuestions(response.data)
        setLoading(false);
    })
    }, [isLoading])

    // if loading return loading screen
    if(isLoading) return <p>Loading</p>

    var count = questions.data.length

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

    const getNextQuestionNum = () => {
        var nextQuestion;
        if(answeredQuestions.length === count){
            nextQuestion = Math.floor(Math.random() * count);
            setAnsweredQuestions([nextQuestion]);
            return nextQuestion;
        }
        while(true){
            nextQuestion = Math.floor(Math.random() * count);
            if(answeredQuestions.indexOf(nextQuestion) === -1){
                answeredQuestions.push(nextQuestion);
                return nextQuestion;
            }
        }
    }

    const submitAns = () => {
        setLoading(true)
        axios.post('/questionData/answer', {  
            question: questions.data[questionNum].question,
            answer: answerChoice}).then(response => {
                if(response.data.success == 1){
                    setQuestion(getNextQuestionNum());
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

                setLoading(false)
        })

    }

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
                    <button className='btn btn-default btn-lg left' onClick={submitAns}>Submit</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Quiz;

