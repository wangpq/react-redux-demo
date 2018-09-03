import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {SearchTopics} from '../style';


class SearchContain extends PureComponent {
  render() {
    const topics = this.props.searchTopics.toJS();
    return (
      <SearchTopics>
        {
          topics.map(item => { 
            return (
              <li key={item.id}>
                  <div className="search-container">
                    <Link to={{ pathname: `/detail/${item.id}/`, state: { data: item } }} key={item.id}>
                      <img className="search-item-pic" src={item.author.avatar_url} alt="" style={{display:"inline-block","maxWidth":"100%"}}/>
                      <p className="cartoon-title">{item.title}</p>
                    </Link>
                  </div>
                  <div>
                    作者：{item.author.loginname} &nbsp;&nbsp;
                    被浏览：{item.visit_count}次
                  </div>
              </li>
            )
          })
        }
      </SearchTopics>
    );
  }
}

const mapState = state => ({
  searchTopics: state.getIn(['home', 'searchTopics'])
});

export default connect(mapState)(SearchContain);