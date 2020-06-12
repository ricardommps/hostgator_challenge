import { getPlans, getPlansSuccess, getPlansFailure } from '../plansActions';
import reducer from '../plansReducer';
import initialState from '../plansReducer';
import { createMockPlans } from './utils/mockPlans';

describe('Plans reducer', () => {
  it('should return the initial state', () => {
    expect(reducer({}, { type: null })).toEqual({});
  });
  it('should handle getPlans action', () => {
    expect(reducer(initialState, getPlans())).toEqual({
      ...initialState,
      plansInFlight: true,
    });
  });
  it('should handle getPlansSuccess action', () => {
    const response = createMockPlans;
    expect(reducer(initialState, getPlansSuccess(response))).toEqual({
      ...initialState,
      plans: response,
      plansInFlight: false,
    });
  });
  it('should handle getPlansFailure', () => {
    const error = new Error('error');
    expect(reducer(initialState, getPlansFailure(error))).toEqual({
      ...initialState,
      plans: {},
      plansInFlight: false,
    });
  });
});
