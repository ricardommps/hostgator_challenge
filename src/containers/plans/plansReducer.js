import { GET_PLANS_REQUEST, GET_PLANS_SUCCESS, GET_PLANS_FAILURE } from './plansActions';

export const initialState = {
  plans: {},
  plansInFlight: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PLANS_REQUEST: {
      return { ...state, plansInFlight: true };
    }
    case GET_PLANS_SUCCESS: {
      return { ...state, plans: payload, plansInFlight: false };
    }
    case GET_PLANS_FAILURE: {
      return { ...state, plans: {}, plansInFlight: false };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
