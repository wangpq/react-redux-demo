import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionType from './actionType';

export const handleClosed = () => ({
  type: actionType.CLOSED,
  isShowed: false
});

export const getTopicList = () => {
  return dispatch => {
    axios.get('https://cnodejs.org/api/v1/topics').then(res => { 
      const list = res.data.data;
      dispatch({
        type: actionType.GET_ARTICLE_LIST,
        topics: fromJS(list)
      });
    })
    .catch(err => {
      alert('请求topics数据出错')
    })
  }
};

export const searchTopicByKeyWord = (list, keyword) => { 
  return dispatch => {
    const arr = []; 
    for(let i = 0; i < list.length; i++) {
      let item=list[i];
      if(item.title.indexOf(keyword) >= 0) {
        arr.push(item)
      }
    }
    dispatch({
      type: actionType.SEARCH_TOPIC_BY_KEYWORD,
      searchTopics: fromJS(arr),
      isShowed: true,
      keyword
    })
  }
};