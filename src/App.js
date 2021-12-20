import React, { Component } from "react";

import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOprtions";
import Statistics from "./Components/Statisctics/Statistics";
import Section from "./Components/Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  updateFeedbacks = (data) => {
    console.log(data);
    console.log(this.state.total);
    this.setState((prevState) => {
      return {
        [data]: prevState[data] + 1,
        total: prevState.total + 1,
      };
    });
  };

  checkTotal = () => {
    if (this.state.total !== 0) {
      return false;
    }
    if (this.state.total === 0);
    {
      return true;
    }
  };
  // updatePositiveFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       [data]: prevState[data] + 1,
  //       total: prevState.total + 1,
  //     };
  //   });
  // };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;

    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={["good", "neutral", "bad"]}
              onLeaveFeedback={this.updateFeedbacks}
            />
          }
        ></Section>

        <Section
          title="Statistics"
          checkTotal={this.checkTotal}
          children={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          }
        ></Section>
      </>
    );
  }
}

export default App;
