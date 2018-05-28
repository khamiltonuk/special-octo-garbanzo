import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionDetails from "./QuestionDetails";
import { fetchQuestionDetails, questionVote } from "../../actions";

export class QuestionDetailsContainer extends Component {
  componentDidMount() {
    const id = this.props.location.pathname.split("/").pop();
    this.props.fetchQuestionDetails(id);
  }

  render() {
    return <QuestionDetails {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    questionDetails: state.questionDetails,
    global: state.global
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuestionDetails: id => dispatch(fetchQuestionDetails(id)),
    questionVote: id => dispatch(questionVote(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionDetailsContainer
);
