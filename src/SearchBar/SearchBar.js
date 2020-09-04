import React, { Component } from 'react';
import APIconfig from '../APIconfig';
import './SearchBar.css'
import SearchContext from '../SearchContext';
import ValidationError from '../ValidationError';
export default class SearchBar extends Component {
    static contextType = SearchContext;
    state = {
        search: {
            value: "",
            touched: false
        }
    }
    handleSearchResults = (e) => {
        e.preventDefault();
        //console.log("Trying to search");
        const value = this.state.search.value;
        //console.log(value);
        //Need to account for blank search
        fetch(`${APIconfig.API_ENDPOINT}people/?search=${value}`)
            .then(myRequest => {
                if (!myRequest) {
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
    updateSearchValue(search) {
        this.setState({
            search: {
                value: search,
                touched: true
            }
        })
    }
    validateSearch() {
        const value = this.state.search.value.trim();
        if (value.length === 0) {
            return `Can't search for a blank!`
        }
    }
    render() {
        return (
            <section className="search-section" onSubmit={event => this.handleSearchResults(event)}>
                <form>
                    <div className="formGroup">
                        <label htmlFor="searchBar">Search:</label>
                        <input type="text" name="searchBar" id="searchBar"
                            onChange={e => this.updateSearchValue(e.target.value)}>
                        </input>
                    </div>
                    <button type="submit"
                        disabled={
                            this.validateSearch()
                        }
                    > Find </button>
                </form>
                {this.state.search.touched && (<ValidationError message={this.validateSearch()}></ValidationError>)}
            </section>
        )
    }
}