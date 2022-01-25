import axios from 'axios';

export default axios.create({
  baseURL: 'https://protected-taiga-89091.herokuapp.com/api',
});
