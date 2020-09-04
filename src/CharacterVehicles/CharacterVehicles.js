import React, { Component } from 'react';

export default class CharacterVehicles extends Component {
    //this.grabFilms(this.props.item.films);
    state = {
        vehicles: []
    }
    // grabFilms = (films) => {
    //     let filmTitles = [];
    // }
    componentDidMount() {
        //console.log(this.props.ships)
        const vehicles = this.props.vehicles;
        vehicles.map(vehicles => {
            fetch(vehicles)
                .then(myRequest => {
                    return myRequest.json();
                })
                .then(myData => {
                    //console.log(myData);
                    this.setState({
                        vehicles: [...this.state.vehicles, myData.name]
                    })
                })
        })
    }
    componentWillUnmount(){
        this.setState({
            vehicles: []
        })
    }
    render() {
        const vehicleList = this.state.vehicles.map((vehicle, index) => {
            return (
                <li key={index}>
                    {vehicle}
                </li>
            )
        })
        if(vehicleList.length === 0){
            vehicleList.push(<li key="none">No Vehicles :(</li>)
        }
        return (
            <div className="Vehicles">
                <h4>Rode or Drove In:</h4>
                <ul>
                    {vehicleList}
                </ul>
            </div>
        )
    }
}