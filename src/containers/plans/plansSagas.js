import { call, takeEvery, all, put } from 'redux-saga/effects';
import { getPlansSuccess, getPlansFailure, GET_PLANS_REQUEST } from './plansActions';
import { getPlans } from './plansService';

export function* getPlansSagas() {
  try {
    const { data } = yield call(getPlans);
    console.log('--DEBUG--', data);
    yield put(getPlansSuccess(data.shared.products));
  } catch (error) {
    yield put(getPlansFailure(error));
  }
}

const sagas = all([takeEvery(GET_PLANS_REQUEST, getPlansSagas)]);

export default sagas;
