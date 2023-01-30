import Notiflix from 'notiflix';
import renderList from './renderList';
import renderInfo from './renderInfo';
import getRefs from './getRefs';
const { inputEl, listEl, infoEl } = getRef();
export default function handlerData(data) {
  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }

  if (data.length === 1) {
    infoEl.innerHtml(renderInfo);
    return;
  }

  listEl.innerHtml(data.map(renderList).join(''));
}
