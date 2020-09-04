import React, { Component } from 'react';
import ResultItem from '../ResultItem/ResultItem';
import SearchContext from '../SearchContext';

import './SearchResults.css'
export default class SearchResults extends Component{
    static contextType = SearchContext;
    render(){
        //const dummyStore = ["item 1","item 2","item 3"]
        //console.log(this.context.results);
        const results = this.context.results.map((item, index) => {
            return (
                <ResultItem
                    key={index}
                    item={item}
                >
                </ResultItem>
            )
        })
        return(
            <ul>
                {results}
            </ul>
        )
    }
}