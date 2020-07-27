import React, { Component } from 'react';

class Option extends Component {

    render() {
        let {key, value } = this.props;
        console.log(value);
        return (
            <option key={key} value={value}>{value}</option>
        )
    }


}

export default Option;