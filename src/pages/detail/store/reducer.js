
import { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
  topic: {},
  id: ''
});

export default (state = defaultState, action) => {
  switch(action.type) {

    case actionType.GET_TOPIC_BY_ID:
    debugger
      let topic=state.get('topics').filter(item=>{
        item.id==action.id
      })
      return state.merge({
        topic: topic,
        id: action.id
      });

    default: return state;
  }
};

