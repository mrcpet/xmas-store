import axios from "axios";

export const fetchData = async (endpoint) => {
  let url;
  url = `${process.env.BASE_URL}/${endpoint}`;
  try {
    const response = await axios.get(url);
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
    throw new Error(
      `Something went wrong when fetching data - ${error} - ${error.response.data}`
    );
  }
};
