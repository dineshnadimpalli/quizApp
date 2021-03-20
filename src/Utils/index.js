import { correctAnsForQuizQues } from "../Config"


const getResults = (userSubmission) => {
    let score = 0, total = 0
    let correctAns = correctAnsForQuizQues[userSubmission.quiz_id].questions
    total = correctAns.length
    correctAns = correctAns.reduce((res, curr)=>{
        res[curr.ques_id] = curr.correct_option
        return res
    }, {})
    
    let result = {}
    userSubmission.mappings.forEach(sub=>{
        if(sub.submitted_option==correctAns[sub.ques_id]){
            score++
        }
        if(result.questions == undefined){
            result.questions = []
            result.questions.push({
                "ques_id": sub.ques_id,
                "correct_option": correctAns[sub.ques_id],
                "submitted_option": sub.submitted_option
            })
        }else{
            result.questions.push({
                "ques_id": sub.ques_id,
                "correct_option": correctAns[sub.ques_id],
                "submitted_option": sub.submitted_option
            })
        }
    })
    result.score = score
    result.total_score = total
    return result
}


export {
    getResults
}