import React, { Component } from 'react';
import ResultItem from '../ResultItem/ResultItem';
import SearchContext from '../SearchContext';
import './SearchResults.css'
export default class SearchResults extends Component {
    static contextType = SearchContext;
    render() {
        //const dummyStore = ["item 1","item 2","item 3"]
        //console.log(this.context.results);
        let results = "";
        if(this.context.results.length === 0 && this.context.searched){
            results = (<li>No results</li>)
            
        } else if(this.context.searched){
            results = this.context.results.map((item, index) => {
                return (
                    <ResultItem
                        key={index + item.name}
                        item={item}
                    >
                    </ResultItem>
                )
            })
        } else {
            results = (<li className="initial-search-placeholder">Your Search Results will appear here.</li>)
        }
        return (
            <section>
                <ul>
                    {results}
                </ul>
            </section>

        )
    }
}