import React, { Component } from 'react';
import CustomSelect from './CustomSelect';
import fake from './fake';
// import data from './data';


class App extends Component {
    constructor() {
        super();
        this.state = {
            city: fake,
            district: fake,
            commune: fake,
        };
    }

    


    handleSelectChange = () => {

    }

    render() {
        const container_style = {
            width: '20%',
            align: 'center',
            marginTop: '100px',
            marginLeft: '40%',

        }
        return (
            <div style = {container_style}>
                <CustomSelect options={this.state.city}/>
                <CustomSelect options={this.state.district} />
                <CustomSelect options={this.state.commune} />
            </div>
        )
    }
}

export default App;