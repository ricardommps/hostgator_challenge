import axiosMock from 'axios';
import { recordSaga } from 'utils/test/recordSaga';
import { getPlansSagas } from '../plansSagas';
import { GET_PLANS_REQUEST, GET_PLANS_SUCCESS, GET_PLANS_FAILURE } from '../plansActions';
import { initialState as initialStatePlans } from '../plansReducer';
import { createMockPlans } from './utils/mockPlans';
jest.mock('axios');

const state = {
  plans: initialStatePlans,
};

const response = {
  data: { ...createMockPlans },
};
describe('Plans Saga Test', () => {
  describe('getPlans - GET_PLANS_REQUEST', () => {
    let stub = null;
    afterEach(() => {
      if (stub) {
        stub.restore();
        stub = null;
      }
    });
    const payload = response.data.shared.products;
    describe('getPlansSuccess - GET_PLANS_SUCCESS', () => {
      it('Call getPlans Success', async done => {
        axiosMock.get.mockImplementationOnce(() => Promise.resolve(response));
        const result = await recordSaga(
          getPlansSagas,
          {
            type: GET_PLANS_REQUEST,
          },
          state
        );
        expect(result).toEqual([
          {
            type: GET_PLANS_SUCCESS,
            payload,
          },
        ]);
        done();
      });
    });
    describe('getPlansFailure - GET_PLANS_FAILURE', () => {
      it('Call getPlans Failure', async done => {
        const error = new Error('error');
        axiosMock.get.mockImplementationOnce(() => {
          throw error;
        });

        const result = await recordSaga(
          getPlansSagas,
          {
            type: GET_PLANS_REQUEST,
          },
          state
        );

        expect(result).toEqual([
          {
            type: GET_PLANS_FAILURE,
            payload: error,
          },
        ]);
        done();
      });
    });
  });
});
