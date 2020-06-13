// IMPORTING CONSTANTS LINKS FROM CONSTANT FILE
import { loginUrl as url } from '../constants';

function getLoginData(token) {
  return fetch(url, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  }).then((res) => res.json());
}

export default getLoginData;
