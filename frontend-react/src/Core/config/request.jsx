import axios from "axios";
import localStorageAction from './localstorage'

axios.defaults.baseURL = "http://127.0.0.1:8000/api";
// axios.defaults.baseURL = process.env.BASE_URL;

const sendRequest = async ({
  method = "GET",
  route,
  body,
  includeHeaders = true,
}) => {
  if (!route) throw Error("URL required");

  axios.defaults.headers.authorization = includeHeaders
    ? `Bearer ${localStorageAction("access_token")}`
    : "";

  try {
    const response = await axios.request({
      method,
      url: route,
      data: body,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export default sendRequest;