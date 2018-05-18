import React, { Component } from "react";
import { connect } from "react-redux";
import Questions from "./QuestionDetails";
import { bindActionCreators } from "redux";
import { fetchQuestionDetails } from "../../actions/actions";

export class QuestionDetailsContainer extends Component {
  componentDidMount() {
    this.props.fetchQuestionDetails();
  }

  render() {
    return <QuestionDetails {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    questionDetail: state.questionDetail,
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchQuestionDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionDetailsContainer
);
