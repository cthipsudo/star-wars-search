import React, { Component } from 'react';
import TitleHeader from '../TitleHeader/TitleHeader'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import SearchContext from '../SearchContext';
class App extends Component {
  state = {
    results: [],
    searched: false
  }
  handleSearch = (results) => {
    this.setState({
      results: results,
      searched: true
    })
  }
  render(){
    //console.log(this.state);
    return (
      <SearchContext.Provider value={
        {
          results: this.state.results,
          searched: this.state.searched,
          handleSearch: this.handleSearch,
        }
      }>
      <main className='App'>
        <TitleHeader />
        <SearchBar />
        <SearchResults />
      </main>
      </SearchContext.Provider>
    );
  }
}

export default App;