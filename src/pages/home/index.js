import React, { PureComponent } from 'react';

import Header from '../../component/Header'
import SearchBar from './component/SearchBar'
import SearchResult from './component/SearchResult'


class Home extends PureComponent {

  render() {
    return (
      <div>
        <Header/>
        <SearchBar/>
        <SearchResult/>
      </div>
    )
  }
}

export default Home;