import '../css/styles.css';
import getRef from './getRefs';
import ApiService from './fetchCountries';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const api = new ApiService();
const { inputEl, listEl, infoEl } = getRef();

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  api.word = e.target.value.trim();
  if (api.word) {
    api.fetchToApi();
  } else {
    listEl.innerHTML = '';
    infoEl.innerHTML = '';
  }
}
