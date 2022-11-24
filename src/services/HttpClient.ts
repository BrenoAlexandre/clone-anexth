import axios from 'axios';
// import getTokenStorage from '../utils/getTokenStorage';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*',
};

const { REACT_APP_API_URL, REACT_APP_API_V1 } = process.env;

const axiosConfig = axios.create({
  baseURL: `${REACT_APP_API_URL}${REACT_APP_API_V1}`,
  timeout: 30000,
  headers: defaultHeaders,
});

// axiosConfig.defaults.headers.common.authorization = getTokenStorage();

// export function setAxiosAuth(): void {
//   axiosConfig.defaults.headers.common.authorization = getTokenStorage();
// }

class HttpClient {
  static api = axiosConfig;
}

export default HttpClient;
