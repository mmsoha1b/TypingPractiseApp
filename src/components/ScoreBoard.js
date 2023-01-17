
const ScoreBoard =({success,failed,score,word})=>{
    return(
    <>
    <div className = "scoreboard">
        <div className = "score">
            Score: {score}
        </div>
        <div className = "attempt">
            Attmpts: {success[word]+failed[word]}
        </div>
        <div className = "success">
            Success: {success[word]}
        </div>
        <div className = "failed">
            Failed: {failed[word]}
        </div>
    </div>
    </>
    )
};
export default ScoreBoard;