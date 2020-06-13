// IMPORTING CONSTANTS LINKS FROM CONSTANT FILE
import { userUrl as url, followers } from '../constants';

function getFollowersDetails(username) {
  return fetch(url + username + followers).then((res) => res.json());
}

export default getFollowersDetails;
