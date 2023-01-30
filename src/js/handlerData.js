import Notiflix from 'notiflix';
import renderList from './renderList';
import renderInfo from './renderInfo';
import getRef from './getRefs';

const { listEl, infoEl } = getRef();
export default function handlerData(data) {
  listEl.innerHTML = infoEl.innerHTML = '';

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
}
