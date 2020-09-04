import React from 'react';
import ReactDOM from 'react-dom';
import TitleHeader from './TitleHeader';

describe('Title Header Test', () => {
    it('renders the title header without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<TitleHeader/>, div);

        ReactDOM.unmountComponentAtNode(div);
    })
})