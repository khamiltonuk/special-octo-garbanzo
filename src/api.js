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
