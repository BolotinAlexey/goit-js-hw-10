export default function renderList({ name, flags }) {
  return `
    <li class="country-list__item" data-name="${name.official}">
      <img src="${flags.png}" alt="${flags.alt}" class="country-list__flag" />
      <span class="country-list__name">${name.official}</span>
    </li>
    `;
}
