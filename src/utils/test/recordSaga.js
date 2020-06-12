import { runSaga } from 'redux-saga';

/**
 * saga to test independently
 */
export async function recordSaga(saga, initialAction, state) {
  const dispatched = [];
  await runSaga(
    {
      dispatch: action => dispatched.push(action),
      getState: () => state,
    },
    saga,
    initialAction
  ).toPromise();

  return dispatched;
}
