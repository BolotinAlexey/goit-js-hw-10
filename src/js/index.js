import '../css/styles.css';
import getRef from './getRefs.js';
// import onInput from './inputHandler';
import ApiService from './fetchCountries';

const debounce = require('lodash.debounce');
const api = new ApiService();
const DEBOUNCE_DELAY = 300;

const { inputEl, listEl, infoEl } = getRef();

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  api.word = e.target.value;
  api.fetchToApi();
}
