export default function renderList({
  name,
  capital,
  population,
  flags,
  languages,
}) {
  return `
  <li class="item">
  <img src="${flags.png}" alt="" class="flag" />
  <span class="name">${name.official}</span>
</li>
    `;
}
