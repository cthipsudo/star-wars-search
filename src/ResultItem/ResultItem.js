import React, { Component } from 'react';
import CharacterFilms from '../CharacterFilms/CharacterFilms'
import CharacterShips from '../CharacterStarships/CharacterStarships'
import CharacterVehicles from '../CharacterVehicles/CharacterVehicles'
import './ResultItem.css'
export default class ResultItem extends Component {
    state = {
        films: this.props.item.films,
        ships: this.props.item.starships,
        vehicles: this.props.item.vehicles
    }
    render() {
        console.log(this.props.item);
        return (
            <li>
                <div className="result-sheet">
                    <div className="top-section">
                        <h2>Name: {this.props.item.name}</h2>
                        <div className="basic-info">
                            <h3>Born: {this.props.item.birth_year}</h3>
                            <h3>Gender: {this.props.item.gender}</h3>
                            <h3>Height: {this.props.item.height}</h3>
                            <h3>Mass: {this.props.item.mass}</h3>
                            <h3>Eye Color: {this.props.item.eye_color}</h3>
                            <h3>Hair Color: {this.props.item.hair_color}</h3>
                            <h3>Skin Color: {this.props.item.skin_color}</h3>
                        </div>
                    </div>
                    <div className="mid-section">
                        <CharacterFilms films={this.state.films}/>
                        <CharacterShips ships={this.state.ships}/>
                        <CharacterVehicles vehicles={this.state.vehicles}/>
                    </div>
                </div>
            </li>
        )
    }
}