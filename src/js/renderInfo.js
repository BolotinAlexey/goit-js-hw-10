import renderLanguages from './renderLanguages';
export default function renderInfo({
  name,
  capital,
  population,
  flags,
  languages,
}) {
  return `
    <div class="info__header">
  <img src="${flags.png}" alt="${flags.alt}" class="info__img" />
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
   ${renderLanguages(languages)}
    </ul>
    </span>
  </li>
</ul>

    `;
}
