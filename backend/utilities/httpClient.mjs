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

export const postData = async (endpoint, body) => {
  let url = `${process.env.BASE_URL}/${endpoint}`;
  try {
    await axios.post(url, body);
    return;
  } catch (error) {
    console.log(error);
    throw new Error(
      `Something went wrong when posting data - ${error} - ${error.response.data}`
    );
  }
};

export const deleteData = async (endpoint, id) => {
  let url = `${process.env.BASE_URL}/${endpoint}/${id}`;
  try {
    await axios.delete(url);
    return;
  } catch (error) {
    console.log(error);
    throw new Error(
      `Something went wrong when trying to delete data - ${error} - ${error.response.data}`
    );
  }
};
