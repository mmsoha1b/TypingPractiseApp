import { useState } from "react";

const Timer = ({setFailed,failed,word}) =>{
    const maxTime = 30; 
    const [timer, setTimer] = useState(0);
    if(timer < maxTime){
        setTimeout( () => {
            setTimer( timer + 1);
        }, 1000);
    };
    if (timer === maxTime){
        setTimer(0);
        const wordFail = 0 || failed[word];
        setFailed({...failed,[word]:wordFail+1});;
    }


    return(
        <>
        <div className="timer">
          Time left: {maxTime -  timer}
        </div>
        </>
    )
};
export default Timer;