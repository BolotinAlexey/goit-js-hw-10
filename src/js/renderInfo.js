import renderLanguages from './renderLanguages';
export default function renderInfo({
  name,
  capital,
  population,
  flags,
  languages,
}) {
  return `
    <div class="info__title">
  <img src="${flags.png}" alt="${name.official}" class="info__img" />
  <h2 class="info__name">${name.official}</h2>
</div>
<ul class="info__list">
  <li class="info__item">
    <h4 class="item__key">Capital:</h4>
    <span class="item__value">${capital}</span>
  </li>
  <li class="info__item">
    <h4 class="item__key">Population:</h4>
    <span class="item__value">${population}</span>
  </li>
  <li class="info__item">
    <h4 class="item__key">Languages:</h4>
    <span class="item__value">
    <ul class="list__languages">
  <li class="languages__item"></li>
   ${renderLanguages(languages)}
    </ul>
   
 
    </span>
  </li>
</ul>

    `;
}
