import { useState } from 'react';
import './App.css'
import '../src/font/RifficFree-Bold.ttf'
import ScoreBoard from './components/ScoreBoard';
import UserType from './components/UserType';
import Timer from './components/Timer';


function App() {
  const makeEmptyObjOfArr= (arr) =>{
    const obj = {}
    arr.forEach((element,index)=>{
        obj[element] = 0;
    });
    return obj;
  };

  const words = ["Hello","Yahoo","Yoshi","Eloquent","Javascript"];
  const [score,setScore] = useState(0);
  const [success, setSuccess] = useState(makeEmptyObjOfArr(words));
  const [failed,setFailed] = useState(makeEmptyObjOfArr(words));

  const randomWord = ()=>{
    const index = Math.round(Math.random(10) * (words.length -1));
    return words[index];
  };
  const selectedWord = randomWord();

  return (
    <>
    <ScoreBoard score = {score} success = {success} failed = {failed} word = {selectedWord}/>
    <UserType word = {selectedWord} score = {score} setScore = {setScore} setSuccess = {setSuccess} success = {success}/>
    <Timer setFailed = {setFailed} failed = {failed} word = {selectedWord}/>
    </>
  );
};

export default App;
