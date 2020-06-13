// IMPORTING CONSTANTS LINKS FROM CONSTANT FILE
import { userUrl as url } from '../constants';

function getUserData(username) {
  return fetch(url + username).then((res) => res.json());
}

export default getUserData;
