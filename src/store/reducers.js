import { combineReducers } from 'redux';
import { PlansReducer } from 'containers/plans';

const reducers = combineReducers({
  plans: PlansReducer,
});

export default reducers;
