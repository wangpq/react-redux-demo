

import * as actionType from './actionType';

export const queryTopicById = (id) => ({
  type: actionType.GET_TOPIC_BY_ID,
  id
});