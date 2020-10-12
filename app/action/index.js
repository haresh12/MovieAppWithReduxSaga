// export action creators
import * as loginActions from './loginActions';
import * as moviesActions from './movieListActions';

export const ActionCreators = Object.assign(
    {},
    loginActions,
    moviesActions
  );
