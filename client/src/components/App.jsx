import React from 'react';
//import axios from 'axios';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
        console.log('here');
    }
    render() {
        return (
            <div>HELLO WORLD</div>
        )
    }
}