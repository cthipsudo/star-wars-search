import React, { Component } from 'react';

export default class ResultItem extends Component {
    render() {
        console.log(this.props.item);
        return (
            <li>
                {this.props.item.name}
            </li>
        )
    }
}