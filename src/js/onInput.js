import Notiflix from 'notiflix';
import ApiService from './fetchCountries';
import clearFields from './clearFields';
import handlerError from './handlerError';
import renderList from './renderList';
import renderInfo from './renderInfo';
import getRef from './getRefs';

export default function onInput(e) {
  const { inputEl, listEl, infoEl } = getRef();
  const api = new ApiService(e.target.value.trim());

  //if isn't ''
  if (api.word) {
    api.fetchToApi().then(handlerData).catch(handlerError);
  } else clearFields(); // if ''
}

function handlerData(data) {
  const { listEl, infoEl } = getRef();
  clearFields();
  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }
  if (data.length === 1) {
    infoEl.insertAdjacentHTML('beforeend', renderInfo(data[0]));
    return;
  }

  listEl.insertAdjacentHTML('beforeend', data.map(renderList).join(''));
  // listEl.addEventListener('click', onClickToCountry);
}

// function onClickToCountry(e) {
//   if (e.target.tagName === 'SPAN' || e.target.tagName === 'IMG') {
//     const currentWord = e.target.parentNode.dataset.name;
//     inputEl.value = currentWord;
//     const api = new ApiService(currentWord);
//     api.fetchToApi();
//     listEl.removeEventListener('click', onClickToCountry);
//   }
// }
