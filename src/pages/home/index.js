import React, { PureComponent } from 'react';

import Header from '../../component/Header'
import SearchBar from './component/SearchBar'
import SearchResult from './component/SearchResult'
import {Wrapper} from './style';

class Home extends PureComponent {

  render() {
    return (
      <Wrapper>
        <Header/>
        <SearchBar/>
        <SearchResult/>
      </Wrapper>
    )
  }
}

export default Home;