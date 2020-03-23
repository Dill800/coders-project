import React, {useState} from 'react'
import {Container, Col, Row,} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = (props) => {
    const [answerChoice, setChoice] = useState(0);
    const [questionNum, setQuestion] = useState(0);
    const [wrong1, setWrong1] = useState(false);
    const [wrong2, setWrong2] = useState(false);
    const [wrong3, setWrong3] = useState(false);
    const [wrong4, setWrong4] = useState(false);
    const questions = require('./questions.json');
    var count = 3;

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

    const submitAns = () => {
        if(answerChoice !== 0 && questionNum < count - 1 && answerChoice === answer){
            setChoice(0);
            setQuestion(questionNum + 1);
            setWrong1(false);
            setWrong2(false);
            setWrong3(false);
            setWrong4(false);
        }
        if(answerChoice !== 0 && questionNum === count - 1 && answerChoice === answer){
            setChoice(0);
            setQuestion(0);
            setWrong1(false);
            setWrong2(false);
            setWrong3(false);
            setWrong4(false);
        }
        if(answerChoice !== answer){
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
    }

    let question = questions.questions[questionNum].question;
    let choice1 = questions.questions[questionNum].choices[0];
    let choice2 = questions.questions[questionNum].choices[1];
    let choice3 = questions.questions[questionNum].choices[2];
    let choice4 = questions.questions[questionNum].choices[3];
    let answer = questions.questions[questionNum].answer;

    return (
        <div>
            <Container className='quiz-container'>
                <div><p className='question'>{question}</p></div>
                <div><button className={wrong1 ? 'btn btn-default btn-lg btn-block wrongAns' : 'btn btn-default btn-lg btn-block'} onClick={answer1}>{choice1}</button></div>
                <div><button className={wrong2 ? 'btn btn-default btn-lg btn-block wrongAns' : 'btn btn-default btn-lg btn-block'} onClick={answer2}>{choice2}</button></div>
                <div><button className={wrong3 ? 'btn btn-default btn-lg btn-block wrongAns' : 'btn btn-default btn-lg btn-block'} onClick={answer3}>{choice3}</button></div>
                <div><button className={wrong4 ? 'btn btn-default btn-lg btn-block wrongAns' : 'btn btn-default btn-lg btn-block'} onClick={answer4}>{choice4}</button></div>
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

