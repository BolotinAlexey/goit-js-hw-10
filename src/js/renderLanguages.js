export default function renderLanguages(languages) {
  return Object.values(languages)
    .map(lang => `<li class="languages__item">${lang}</li>`)
    .join(',');
}
