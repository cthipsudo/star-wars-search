import React, { Component } from 'react';

export default class CharacterStarships extends Component {
    //this.grabFilms(this.props.item.films);
    state = {
        ships: []
    }
    // grabFilms = (films) => {
    //     let filmTitles = [];
    // }
    componentDidMount() {
        //console.log(this.props.ships)
        const films = this.props.ships;
        films.map(ship => {
            fetch(ship)
                .then(myRequest => {
                    return myRequest.json();
                })
                .then(myData => {
                    //console.log(myData);
                    this.setState({
                        ships: [...this.state.ships, myData.name]
                    })
                })
        })
    }
    componentWillUnmount(){
        clearImmediate();
    }
    render() {
        const shipList = this.state.ships.map((ship, index) => {
            return (
                <li key={"ship" + index}>
                    {ship}
                </li>
            )
        })
        if(shipList.length === 0){
            shipList.push(<li key="none">No Ships :(</li>);
        }
        return (
            <div className="Starships">
                <h4>Flew In:</h4>
                <ul>
                    {shipList}
                </ul>
            </div>
        )
    }
}