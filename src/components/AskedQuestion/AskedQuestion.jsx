import React from "react";
import "./AskedQuestion.css";
import { Container, QuestionComponent } from "../Exports/exports";
function AskedQuestion() {
  return (
    <Container className="askedQuestionContainer">
      <div className="askedQuestion">
        <h1 className="askedQuestionTitle">Top Questions</h1>
        <div className="askedQuestions">
          <QuestionComponent
            question="How do i book a ride?"
            answer="Download the Careem app on the App Store or Google Playstore.
             Sign up with your name and mobile number, and enter a strong password.
              Once you’ve signed up, select the Car or Taxi icon and enter your drop
               off and pick up locations.
               Select the type of car you want, and you’re on your way!"
          />
          <QuestionComponent
            question="How do i become a Captain?"
            answer="Visit the Captain page on our website, 
            or click on “Captain sign-up” at the top of our home page.
             You will find all relevant information there."
          />
          <QuestionComponent
            question="How do contact Customer Care?"
            answer="Please check our Help section at the bottom
             of the page for more information on receiving assistance."
          />
          <QuestionComponent
            question="Where are our service available?"
            answer="You can book a Careem ride 24/7, in 80
           cities across 9 countries: UAE, KSA, Egypt,
           Pakistan, Jordan, Iraq, Kuwait, Morocco and Bahrain."
          />
        </div>
      </div>
    </Container>
  );
}

export default AskedQuestion;
