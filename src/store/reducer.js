import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';

// 将每个部分的工程拆分成每个部分的小reducer
// 通过combineReducers整合成大reducer
const reducer =  combineReducers({
    home: homeReducer,
    detail : detailReducer
})

export default reducer;
