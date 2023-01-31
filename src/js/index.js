import '../css/styles.css';
import getRef from './getRefs';
import onInput from './onInput';
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

getRef().inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
