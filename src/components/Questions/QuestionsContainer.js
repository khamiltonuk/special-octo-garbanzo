import React, { Component } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";

export class QuestionsContainer extends Component {
  render() {
    return <Questions />;
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
