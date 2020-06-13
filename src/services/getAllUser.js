// IMPORTING CONSTANTS LINKS FROM CONSTANT FILE
import { suggestionUrl as url } from '../constants';

function getAllUser() {
  const id = Math.round(Math.random() * 1000);
  return fetch(url + id).then((res) => res.json());
}

export default getAllUser;
