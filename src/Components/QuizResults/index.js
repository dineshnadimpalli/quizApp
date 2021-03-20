import React, { useEffect, useState } from "react";
import "./quizResults.css";
import tickImage from "../../Assets/tickImage.png";
import wrongTick from "../../Assets/wrongTick.png";

export default function QuizResults(props) {
  const [resultsObj, setResultsObj] = useState({});

  const { quizResults, userAns, isFetching, quizQues } = props;

  useEffect(() => {
    const results =
      quizResults &&
      quizResults.questions.reduce((res, curr) => {
        res[curr.ques_id] = curr;
        return res;
      }, {});
    results && setResultsObj(results);
  }, [quizResults]);

  if (isFetching) {
    return (
      <div className="fetchResultsSection">
        <h1>Fetching results...</h1>
      </div>
    );
  }

  return (
    <div>
      <center>
        <h1 className="score">
          Your score: {quizResults && quizResults.score}
        </h1>
      </center>
      <div className="resultsSection">
        <h3 className="sectionTitle">Answers</h3>
        {quizQues &&
          quizQues.map((question, i) => {
            let yourAnswer =
              resultsObj[question.id] &&
              resultsObj[question.id]["submitted_option"]
                ? resultsObj[question.id]["submitted_option"]
                : "Not Attempted";

            let correctAnswer =
              resultsObj[question.id] &&
              resultsObj[question.id]["correct_option"];
            return (
              <div className="questionsContainer">
                <div>
                  <div className={`question-${i + 1}`}>
                    Question: {question.name}
                  </div>
                  <div className={`submitted-answer-${i + 1}`}>
                    Your Answer: <span>{yourAnswer}</span>
                  </div>
                  <div className={`correct-answer-${i + 1}`}>
                    Correct Answer: <span>{correctAnswer}</span>
                  </div>
                </div>
                <div>
                  {yourAnswer === correctAnswer ? (
                    <img src={tickImage} className="righttickImage" />
                  ) : (
                    <img src={wrongTick} className="wrongtickImage" />
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
