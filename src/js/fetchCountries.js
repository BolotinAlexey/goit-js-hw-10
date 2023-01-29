const URL = 'https://restcountries.com/v3.1/name/';
const FILTER = '?fields=name,capital,population,flag,languages';
export default class ApiService {
  constructor() {
    this.word = '';
  }
  fetchToApi() {
    fetch(URL.concat(this.word).concat(FILTER))
      .then(response => response.json())
      .then(rendering)
      .catch(console.error);
  }
}
