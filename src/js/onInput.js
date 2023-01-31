import ApiService from './fetchCountries';
import clearFields from './clearFields';
import handlerData from './handlerData';
import handlerError from './handlerError';
export default function onInput(e) {
  const api = new ApiService(e.target.value.trim());
  if (api.word) {
    api.fetchToApi().then(handlerData).catch(handlerError);
  } else clearFields();
}
