const URL = 'https://restcountries.com/v3.1/name/';
const FILTER = '?fields=name,capital,population,flags,languages';
import handlerData from './handlerData';
import handlerError from './handlerError';

export default class ApiService {
  constructor() {
    this.word = '';
  }
  fetchToApi() {
    fetch(URL.concat(this.word).concat(FILTER))
      .then(response => response.json())
      .then(handlerData)
      .catch(handlerError);
  }
}
