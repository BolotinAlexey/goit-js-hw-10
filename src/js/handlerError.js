import Notiflix from 'notiflix';
export default function handlerError(error) {
  Notiflix.Notify.failure(error);
  console.log(error);
}
