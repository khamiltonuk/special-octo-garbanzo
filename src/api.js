export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://private-anon-9aff405484-pollsapi.apiary-proxy.com/questions"
    );

    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const postQuestionVote = async formData => {
  try {
    //console.log(formData);
    const question_id = 1;
    const choice_id = 1;
    const response = await fetch(
      `https://polls.apiblueprint.org/questions/${question_id}/choices/${choice_id}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchQuestionDetails = async id => {
  try {
    const response = await fetch(
      `https://polls.apiblueprint.org/questions/${id}`
    );

    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
