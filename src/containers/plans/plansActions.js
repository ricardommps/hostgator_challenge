export const GET_PLANS_REQUEST = 'GET_PLANS_REQUEST';
export const GET_PLANS_SUCCESS = 'GET_PLANS_SUCCESS';
export const GET_PLANS_FAILURE = 'GET_PLANS_FAILURE';

export const getPlans = () => ({
  type: GET_PLANS_REQUEST,
});

export const getPlansSuccess = result => ({
  type: GET_PLANS_SUCCESS,
  payload: result,
});

export const getPlansFailure = error => ({
  type: GET_PLANS_FAILURE,
  payload: error,
});
