import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchContain extends PureComponent {
  render() {
    const topics = this.props.searchTopics.toJS();
    return (
      <ul>
        {
          topics.map(item => { 
            return (
              <li key={item.id} style={{"listStyle":"none","padding":"12px","backgroundColor":"#f0f0f0","margin":"8px"}} >
          
                  <div className="search-container">
                    <Link to={{ pathname: `/detail/${item.id}/`, state: { data: item } }} key={item.id}>
                      <img className="search-item-pic" src={item.author.avatar_url} alt="" style={{display:"inline-block","maxWidth":"100%"}}/>
                      <p className="cartoon-title">{item.title}</p>
                    </Link>
                  </div>
                  <div>
                    <div className="author">
                      作者：{item.author.loginname}
                      被浏览：{item.visit_count}次
                    </div>
                  </div>
          
              </li>
            )
          })
        }
      </ul>
    );
  }
}

const mapState = state => ({
  searchTopics: state.getIn(['home', 'searchTopics'])
});

export default connect(mapState)(SearchContain);