import Api from '../../api';
import ApiConstants from '../ApiConstants';

export default function loginUser(username, password) {
  return Api(
    ApiConstants.LOGIN,
    {
      'email': username,
      'password': password
    },
    'POST',
    null
  );
}
