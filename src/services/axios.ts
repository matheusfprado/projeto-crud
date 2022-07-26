import axios from "axios";

const api = axios.create({
    baseURL: 'https://sleepy-waters-97406.herokuapp.com/api',
  });

  export default api