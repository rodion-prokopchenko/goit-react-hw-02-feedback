import propTypes from "prop-types";
import React, { Component } from "react";
import shortid from "shortid";

class FeedbackOptions extends Component {
  submitFeedback = (e) => {
    e.preventDefault();

    this.props.onLeaveFeedback(e.currentTarget.name);
    setTimeout(() => this.props.updatePositiveFeedback(), 1);
  };

  render() {
    return (
      <>
        <div>
          {this.props.options.map((options) => (
            <button
              type="button"
              key={shortid.generate()}
              onClick={this.submitFeedback}
              name={options}
            >
              {options}
            </button>
          ))}
        </div>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
};
export default FeedbackOptions;
