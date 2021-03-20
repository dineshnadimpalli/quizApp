import React, { useEffect, useState, useRef } from "react";
import { quizQuestionsDetails } from "../../Config";
import { getResults } from "../../Utils";
import CircularLoader from "../CircularLoader";
import QuizResults from "../QuizResults";
import "./quizPage.css";

export default function QuizPage(props) {
  const [quizQuesInfo, setQuizQuesInfo] = useState(undefined);
  const [isFetching, setIsFetching] = useState(false);
  const [isQuizTimer, setIsQuizTimer] = useState(true);
  const [selectedQuesCount, setSelectedQuesCount] = useState(0);
  const [selectedQues, setSelectedQues] = useState(undefined);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [quizResults, setQuizResults] = useState(undefined);
  const [quizUserAnsObj, setQuizUserAnsObj] = useState({
    quiz_id: undefined,
    mappings: [],
  });

  useEffect(() => {
    setTimeout(() => {
      setIsQuizTimer(false);
    }, 3000);
    if (
      props.location.state &&
      props.location.state.quizInfo &&
      props.location.state.quizInfo.id
    ) {
      setQuizUserAnsObj({
        ...quizUserAnsObj,
        quiz_id: props.location.state.quizInfo.id,
      });
      setIsFetching(true);
      setQuizQuesInfo(quizQuestionsDetails[props.location.state.quizInfo.id]);
      setIsFetching(false);
      // fetch(
      //   `${process.env.REACT_APP_API_URL}/api/quiz-questions/all/${props.location.state.quizInfo.id}`,
      //   {
      //     method: "GET",
      //     headers: {
      //       "auth-token": "19c4ff12-e027-4320-b844-2cda768714e8",
      //       "content-type": "application/json",
      //     },
      //   }
      // )
      //   .then((res) => res.json())
      //   .then((res) => {
      //     // console.log(res);
      //     setIsFetching(false);
      //     setQuizQuesInfo(res);
      //   })
      //   .catch((err) => {
      //     setIsFetching(false);
      //     console.log(err);
      //   });
    }
  }, []);

  useEffect(() => {
    if (!isQuizTimer && quizQuesInfo) {
      if (quizQuesInfo && quizQuesInfo.questions.length > 0) {
        setSelectedQuesCount(1);
        setSelectedQues(quizQuesInfo.questions[0]);
        // clearInterval(quesTimeoutInterval.current);
        // quesTimeoutInterval.current = setInterval(() => {
        //   console.log("=====called after 15 sec======");
        //   setSelectedQuesCount((prevTime) => prevTime + 1);
        // }, 15000);
      }
    }
  }, [isQuizTimer, quizQuesInfo]);

  useEffect(() => {
    if (quizQuesInfo && selectedQuesCount > quizQuesInfo.questions.length) {
      // console.log("=====clear interval got called====");
      setIsQuizComplete(true);
      // clearInterval(quesTimeoutInterval.current);
    } else {
      quizQuesInfo &&
        setSelectedQues(quizQuesInfo.questions[selectedQuesCount - 1]);
    }
  }, [selectedQuesCount]);


  useEffect(() => {
    if (isQuizComplete) {
      // console.log(quizUserAnsObj)
      setIsFetching(true);
      setQuizResults(getResults(quizUserAnsObj));
      setIsFetching(false);
      // fetch(`${process.env.REACT_APP_API_URL}/api/user/quiz-score`, {
      //   method: "POST",
      //   headers: {
      //     "auth-token": "19c4ff12-e027-4320-b844-2cda768714e8",
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(quizUserAnsObj),
      // })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     // console.log(res);
      //     setIsFetching(false);
      //     setQuizResults(res);
      //   })
      //   .catch((err) => {
      //     setIsFetching(false);
      //     console.log(err);
      //   });
    }
  }, [isQuizComplete]);

  // console.log(selectedQues);

  const selectOption = (e, opt, que) => {
    e.preventDefault();
    const newMappings = [...quizUserAnsObj.mappings];
    newMappings.push({
      ques_id: que.id,
      submitted_option: opt,
    });
    setQuizUserAnsObj({
      ...quizUserAnsObj,
      mappings: newMappings,
    });
    if (selectedQuesCount == quizQuesInfo.questions.length) {
      setIsQuizComplete(true);
    }
    setSelectedQuesCount((prev) => prev + 1);
  };

  const onComplete = () => {
    setSelectedQuesCount((prevTime) => prevTime + 1);
  };

  if (isQuizTimer) {
    return (
      <div>
        <center>
          <h1>Your quiz will start in</h1>
          <div className="quizPageTimer">
            <CircularLoader quizTime={true} duration={3} />
          </div>
        </center>
      </div>
    );
  }

  if (isQuizComplete) {
    const userAns = quizUserAnsObj.mappings.reduce((res, curr)=>{
      res[curr.ques_id] = curr
      return res
    }, {})

    return (
      <QuizResults
        userAns={userAns}
        quizResults={quizResults}
        isFetching={isFetching}
        quizQues={quizQuesInfo.questions}
      />
    );
  }

  return (
    <div className="quizPageContainer">
      <div className="quizPageHeaderSection">
        <div>
          <h1>
            {props.location.state &&
              props.location.state.quizInfo &&
              props.location.state.quizInfo.name}
          </h1>
        </div>
        {quizQuesInfo && quizQuesInfo.questions.length > 0 && (
          <div className="quizPageTimer">
            <CircularLoader
              key={selectedQuesCount}
              quizTime={false}
              duration={15}
              size={160}
              onComplete={onComplete}
            />
          </div>
        )}
      </div>
      {quizQuesInfo && quizQuesInfo.questions.length > 0 ? (
        selectedQues && (
          <div>
            <span className="questionsOverview">{`Question ${selectedQuesCount} of ${quizQuesInfo.questions.length}`}</span>
            <div className="question">
              <span>{selectedQues.name}</span>
            </div>
            <div>
              {selectedQues.options.split(",").map((option, i) => (
                <div
                  key={`answer-value-${i + 1}`}
                  className={`answer-value-${i + 1}`}
                  onClick={(e) => selectOption(e, option, selectedQues)}
                >
                  <label>
                    <input
                      type="radio"
                      name={option}
                      value={option}
                      checked={false}
                      onChange={() => console.log("")}
                    />
                    <span className="optionText">{option}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        )
      ) : (
        <h3>No data available</h3>
      )}
    </div>
  );
}
