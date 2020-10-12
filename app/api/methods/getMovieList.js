import Api from '../../api';
import ApiConstants from '../ApiConstants';

export default function getMovieList() {
  return Api(
    ApiConstants.MOVIELIST,null,
    'GET',
    null
  );
}
