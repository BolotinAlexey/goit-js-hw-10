import ApiService from './fetchCountries';
import clearFields from './clearFields';
export default function onInput(e) {
  if (!e.data) {
    clearFields();
    return;
  }
  const api = new ApiService(e.target.value.trim());
  if (api.word) {
    api.fetchToApi();
  } else clearFields();
}
