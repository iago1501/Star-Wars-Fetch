import { combineReducers } from 'redux';
import jedis from './jedis';
import starships from './starships';

const reducers = combineReducers({
  jedis, starships
});

export default reducers;
