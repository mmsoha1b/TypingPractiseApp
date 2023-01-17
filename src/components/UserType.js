import {useState,useEffect} from 'react'; 

const makeEmptyObjOfArr= (arr) =>{
    const obj = {}
    arr.forEach((element,index)=>{
        obj[index] = null;
    });
    return obj;
};

const UserType = ({word, score, setScore,setSuccess,success}) => {
    const letters = word.split('');
    const[index,setIndex] = useState(0)
    const [colorAtIndex,setColorAtIndex] = useState(makeEmptyObjOfArr(letters));    
    const correctColor = 'green';
    const incorrectColor = 'red'; 
    let letter = letters[index];
    useEffect(()=>{
        setIndex(0)
        setColorAtIndex(makeEmptyObjOfArr(word.split('')))
    },[word,score]);  
    
    const increaseScore = ()=>{
        setScore(score+1);
    };

    const handleKeyDown = (event)=>{
        if(event.key.toLowerCase() === letter.toLowerCase()){
            setIndex(index + 1);
            if(index === letters.length-1){
                // Increase Score
                increaseScore();
                // Increase Success
                const wordSuccess = 0 || success[word]
                setSuccess({...success,[word]:wordSuccess+1});
            }else{
                // Mark letter as green
                setColorAtIndex({...colorAtIndex,[index]:correctColor});     
                letter = letters[index]; 
            }
        }else{
            // Mark letter as red
            setColorAtIndex({...colorAtIndex,[index]:incorrectColor});
        }
    };

    return(
        <div className = "word-to-type" onKeyDown = {handleKeyDown} tabIndex={0}>
            {letters.map((letter, index)=>{
                const applyColor = {color:colorAtIndex[index]}
            return  <span style={applyColor} key = {index}>{letter}</span>
            })}
        </div>
    )
};
export default UserType;