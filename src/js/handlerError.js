import Notiflix from 'notiflix';
export default function handlerError(error) {
  Notiflix.Notify.failure(error.toString());
  console.log(error);
}
