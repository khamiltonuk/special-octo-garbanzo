const fetchData = async () => {
  try {
    const response = await fetch(
      "https://private-anon-9aff405484-pollsapi.apiary-proxy.com/questions"
    );

    const data = await response.json();
    return data;
  } catch (e) {
    console.log("hello");
  }
};

export default fetchData;