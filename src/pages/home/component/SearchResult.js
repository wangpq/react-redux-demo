import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {action}  from '../store';
import SearchContain from './SearchContain';
import {SearchTips} from '../style';

class SearchResult extends PureComponent {
  render() {
    const { handleClosed, isShowed } = this.props;
    return (
      <div>
        {
          isShowed && this.props.keyword ? 
            <div>
            <SearchTips>
              <h2 className="title">
                关键词《<b className="keyword">{this.props.keyword}</b>》的搜索：  <span className="clear" onClick={handleClosed}>删除所有</span>
              </h2>
            </SearchTips>
            <SearchContain/>
            </div>
             :
          null
        }
      </div>
    );
  }
}

const mapState = (state) => ({
  keyword: state.getIn(['home', 'keyword']),
  isShowed: state.getIn(['home', 'isShowed'])
});

const mapDispatch = (dispatch) => ({
  handleClosed() {
    dispatch(action.handleClosed())
  }
});


export default connect(mapState, mapDispatch)(SearchResult);