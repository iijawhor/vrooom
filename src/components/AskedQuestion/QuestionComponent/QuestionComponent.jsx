import React, { useState } from "react";
import "./QuestionComponent.css";
import { AddIcon, RemoveIcon } from "../../Exports/exports";
function QuestionComponent({ question, answer }) {
  const [showAnswer, setShowAnser] = useState(false);
  return (
    <div className="questionComponentContainer">
      <div
        className="questionComponentheader"
        onClick={() => setShowAnser(!showAnswer)}
      >
        <h1 className="questionComponentQuestion">{question}</h1>
        {showAnswer ? (
          <RemoveIcon style={{ color: "rgb(42, 211, 42)", fontSize: "25px" }} />
        ) : (
          <AddIcon
            style={{
              color: "rgb(42, 211, 42)",
              fontSize: "25px"
            }}
          />
        )}
      </div>
      {showAnswer && <p className="questionComponentAnswer">{answer}</p>}
    </div>
  );
}

export default QuestionComponent;
