
import { combineReducers } from 'redux';
import categoryDistributionReducer from './categoryDistribution'
import responseTimesReducer from './responseTime'

const rootReducer = combineReducers({
  categoryDistribution: categoryDistributionReducer,
  responseTimes: responseTimesReducer,
});

export default rootReducer;
