import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({setStep,result,setResult}) {

    function ResultButtonHandler() {
        setResult(0);
        setStep(0);
    }

    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {result} ответа из {questions.length}</h2>
            <button onClick={() => ResultButtonHandler()}>Попробовать снова</button>
        </div>
    );
}

function Game({question,step,setStep,result,setResult}) {

    function CheckAnswer(index) {
        if (question.correct === index) setResult(result + 1)
        setStep(step + 1);
    }

    return (
        <>
            <div className="progress">
                <div style={{ width: '50%' }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
            {
                question.variants.map((text,index) => (
                    <li onClick={() => CheckAnswer(index)}>{text}</li>
                )) 
            }
            </ul>
        </>
    );
}

function App() {
    const [step,setStep] = React.useState(0);
    const [result,setResult] = React.useState(0);
    return (
        <div className="App">
        {step < questions.length && <Game question = {questions[step]} step = {step} setStep = {setStep} result ={result} setResult = {setResult}/>}
        {step >= questions.length && <Result setStep = {setStep} result ={result} setResult = {setResult}/> }
        </div>
    );
}

export default App;
