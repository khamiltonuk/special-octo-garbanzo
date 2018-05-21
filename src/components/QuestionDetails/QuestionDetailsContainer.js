import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionDetails from "./QuestionDetails";
import { bindActionCreators } from "redux";
import { fetchQuestionDetails } from "../../actions/actions";

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
    questionDetail: state.questions,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchQuestionDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionDetailsContainer
);
