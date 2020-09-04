import React, { Component } from 'react';

export default class CharacterFilms extends Component {
    //this.grabFilms(this.props.item.films);
    state = {
        films: []
    }
    // grabFilms = (films) => {
    //     let filmTitles = [];
    // }
    componentDidMount(){
        //console.log(this.props.films)
        const films = this.props.films;
        films.map(film => {
            fetch(film)
            .then(myRequest => {
                return myRequest.json();
            })
            .then(myData => {
                //console.log(myData);
                this.setState({
                    films: [...this.state.films, myData.title]
                })
            })
        })
    }
    componentWillUnmount(){
        this.setState({
            films: []
        })
    }
    render() {
        const filmList = this.state.films.map((film, index) => {
            return(
                <li key={index}>
                    {film}
                </li>
            )
        })
        return (
            <div className="film-section">
                <h4>Appeared In:</h4>
                <ul className="Films">
                    {filmList}
                </ul>
            </div>
        )
    }
}