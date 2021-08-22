import axios from 'axios';

/**
 * Helper function that configures axios requests
 * @param {object} config The configuration data.
 * route - The route to make request to. e.g profiles, search?q=term&size=5
 * method - The HTTP method to use. e.g post, get, patch,
 * payload - The request body payload
 * token - The authorization token to use if any
 * @returns {Promise} The axios promise
 */
const Request = async (
  {
    route,
    method,
    payload,
    params,
  }
) => {
  method = method || 'get';
  const headers = {
    Accept: 'application/json',
  };
  return axios({
    data: payload,
    url: `https://jsonplaceholder.typicode.com/${route}`,
    method,
    headers,
    params,
  });
};

export default Request;
