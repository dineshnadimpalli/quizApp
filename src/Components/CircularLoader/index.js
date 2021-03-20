import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./circularLoader.css";

const RenderQuestionTime = ({ remainingTime, duration }) => {
  // console.log(duration, remainingTime)
  return (
    <div className="time-bar">
      <div className="text">Time Remaining</div>
      <div className="quesTimeValue">{`0:${remainingTime
        .toString()
        .padStart(2, "0")}`}</div>
    </div>
  );
};

const RenderQuizTime = ({ remainingTime }) => {
  return (
    <div className="quiz-start-timer-bar">
      <div className="quizTimeValue">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

export default function CircularLoader(props) {
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying
        size={props.size && props.size}
        colors={[["#42D339", 0.5], ["#F7B801", 0.35], ["#A30000"]]}
        onComplete={() => [true, 0]}
        {...props}
      >
        {props.quizTime ? (
          <RenderQuizTime {...props} />
        ) : (
          <RenderQuestionTime {...props} />
        )}
      </CountdownCircleTimer>
    </div>
  );
}
