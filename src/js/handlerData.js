import Notiflix from 'notiflix';
import renderList from './renderList';
import renderInfo from './renderInfo';
import getRef from './getRefs';
import ApiService from './fetchCountries';
import clearFields from './clearFields';

const { inputEl, listEl, infoEl } = getRef();
export default function handlerData(data) {
  clearFields();

  if (data.status === 404) {
    Notiflix.Notify.warning('Oops, there is no country with that name');
    return;
  }
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
  listEl.addEventListener('click', onClickToCountry);
}

function onClickToCountry(e) {
  if (e.target.tagName === 'SPAN' || e.target.tagName === 'IMG') {
    const currentWord = e.target.parentNode.dataset.name;
    inputEl.value = currentWord;
    const api = new ApiService(currentWord);
    api.fetchToApi();
    listEl.removeEventListener('click', onClickToCountry);
  }
}
