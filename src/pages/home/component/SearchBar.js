import React, { PureComponent } from 'react';
import { Input,Button } from 'element-react';
import {connect} from 'react-redux';
import {action}  from '../store';
import {SearchWraper} from '../style';


class SearchBar extends PureComponent {
  constructor(props){
    super(props);
    this.searchKeyWord= ""
  }
  searchInfo(){  
    const list = this.props.topics.toJS();
    if(this.searchKeyWord) {
      this.props.searchTopicByKeyWord(list, this.searchKeyWord)
    } else {
      alert('请输入关键词哦~')
    }
  }

  onKeyDown(e){
    if(e.keyCode === 13){
      this.searchInfo();
    }
  }

  onChange(evt){

    this.searchKeyWord=evt.trim()

  }

  componentDidMount() {
    this.props.getTopicList();
  }

  render() {
    /*
      <input ref={(node) => {this.inputNode = node}} onKeyDown={this.onKeyDown.bind(this)} />
    */

    return (
      <SearchWraper>
        <div className="item">
          <Input size="small" placeholder="请输入搜索关键字" onChange={this.onChange.bind(this)} onKeyDown={this.onKeyDown.bind(this)}/>
        </div>
        <div className="item">
          <Button type="primary" icon="search" size="small" onClick={this.searchInfo.bind(this)}>搜索</Button>
        </div>
     </SearchWraper>
    )
  }
}

const mapState = (state) => ({
  topics: state.getIn(['home', 'topics'])
});

const mapDispatch = (dispatch) => ({
  getTopicList() {
    dispatch(action.getTopicList())
  },
  searchTopicByKeyWord(list, keyword) {
    dispatch(action.searchTopicByKeyWord(list, keyword))
  }
})

export default connect(mapState, mapDispatch)(SearchBar);