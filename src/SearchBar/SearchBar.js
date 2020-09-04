import React, { Component } from 'react';
import APIconfig from '../APIconfig';
import './SearchBar.css'
import SearchContext from '../SearchContext';

export default class SearchBar extends Component {
    static contextType = SearchContext;

    handleSearchResults = (e) => {
        e.preventDefault();
        //console.log("Trying to search");
        const value = e.target.searchBar.value;
        console.log(value);
        fetch(`${APIconfig.API_ENDPOINT}people/?search=${value}`)
            .then(myRequest => {
                if(!myRequest){
                    return myRequest.json().then(e => Promise.reject(e))
                }
                return myRequest.json();
            })
            .then(myData => {
                //console.log(myData);
                this.context.handleSearch(myData.results);
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        return (
            <section className="search-section" onSubmit={event => this.handleSearchResults(event)}>
                <form>
                    <div className="formGroup">
                        <label htmlFor="searchBar">Search:</label>
                        <input type="text" name="searchBar" id="searchBar"></input>
                        <button type="submit"> Find </button>
                    </div>
                </form>
            </section>
        )
    }
}