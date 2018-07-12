import React, { Component } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";
import QuestionsSkeleton from "./QuestionsSkeleton";
import { bindActionCreators } from "redux";
import { fetchQuestions } from "../../actions";

export class QuestionsContainer extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    if (this.props.global.loading) {
      return <QuestionsSkeleton />;
    } else {
      return <Questions {...this.props} />;
    }
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions,
    global: state.global
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchQuestions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsContainer);
