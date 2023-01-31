const URL = 'https://restcountries.com/v3.1/name/';
const FILTER = '?fields=name,capital,population,flags,languages';

export default class ApiService {
  constructor(word = '') {
    this.word = word;
  }
  fetchToApi() {
    return fetch(URL.concat(this.word).concat(FILTER)).then(response => {
      if (response.ok) return response.json();
      else throw Error('Oops, there is no country with that name');
    });
  }
}

// export default function responseCheck(response) {
//   return new Promise((resolve, reject) => {
//     if (response.ok) resolve(response.json());
//     else reject(new Error('Oops, there is no country with that name'));
//   });
// }
