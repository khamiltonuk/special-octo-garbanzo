import React, { Component } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";
import { bindActionCreators } from "redux";
import { fetchQuestions } from "../../actions/actions";

export class QuestionsContainer extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return <Questions {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchQuestions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
