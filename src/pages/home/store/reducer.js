
import { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
  searchTopics: [],
  keyword: '',
  isShowed: true
});

export default (state = defaultState, action) => {
  switch(action.type) {

    case actionType.CLOSED:
      return state.set('isShowed', action.isShowed)

    case actionType.GET_ARTICLE_LIST:
      return state.set('topics', action.topics);

    case actionType.SEARCH_TOPIC_BY_KEYWORD:
      return state.merge({
        searchTopics: action.searchTopics,
        isShowed: action.isShowed,
        keyword : action.keyword
      });

    default: return state;
  }
};

