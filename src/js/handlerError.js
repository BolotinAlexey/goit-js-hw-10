import Notiflix from 'notiflix';
export default function handlerError(error) {
  Notiflix.Notify.failure('ERROR');
  console.log(error);
}
