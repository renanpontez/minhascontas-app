import axios from 'axios';
import _config from 'react-native-config';

export function postSignUp(data) {
  const URL = _config.API_URL + '/user/auth/signup';

  return axios.post(URL, data).then((res) => {
    return res.items;
  }).catch((error) => { console.log(error); })

}