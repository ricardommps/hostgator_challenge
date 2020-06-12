import { all } from 'redux-saga/effects';
import { PlansSagas } from 'containers/plans';

function* Saga() {
  yield all([PlansSagas]);
}

export default Saga;
