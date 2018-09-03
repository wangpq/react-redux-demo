import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {action}  from '../store';
import SearchContain from './SearchContain';

class SearchResult extends PureComponent {
  render() {
    const { handleClosed, isShowed } = this.props;
    return (
      <div>
        {
          isShowed && this.props.keyword ? 
          <div>
            <div>
              <h2 className="title">
                <i >关键词《<i className="keyword">{this.props.keyword}</i>》的搜索：</i>
              </h2>
              <span className="close" onClick={handleClosed}>删除</span>
            </div>
            <SearchContain/>
          </div> :
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