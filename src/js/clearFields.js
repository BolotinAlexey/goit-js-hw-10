import getRef from './getRefs';
const { listEl, infoEl } = getRef();
export default function clearFields() {
  listEl.innerHTML = infoEl.innerHTML = '';
}
