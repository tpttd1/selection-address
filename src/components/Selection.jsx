import React, { Component } from 'react';
import Select from 'react-select'
import fake from '../data/DataAddress.json';
import makeAnimated from 'react-select/animated';


let optionsCity = [];
let optionsDistrict = [];
let optionsCommune = [];

class Selection extends Component {
    constructor() {
        super();
        this.state = {
            city: [],
            district: [],
            commune: [],
            selectedOptionCity: null,
            selectedOptionDistrict: null,
            selectedOptionCommune: null,
        };
    }

    componentWillMount() {
        for (var i = 0; i < 63; i++) {
            let city = Object.keys(fake)[i];
            let object = {};
            object.value = i;
            object.label = city;
            optionsCity.push(object);
        }
    }

    handleChangeCity = selectedOptionCity => {
        optionsDistrict = [];
        optionsCommune = [];

        this.setState({ selectedOptionCity });

        const index = selectedOptionCity.value;
        let district = Object.values(fake)[index];

        for (var t = 0; t < 100; t++) {
            let temp = Object.keys(district)[t];
            if (temp) {
                let object = {};
                object.value = t;
                object.label = temp;
                optionsDistrict.push(object);
            }
        }
    };

    handleChangeDistrict = selectedOptionDistrict => {
        optionsCommune = [];

        this.setState({ selectedOptionDistrict });
        const index = this.state.selectedOptionCity.value;

        let district = Object.values(fake)[index];
        let temp = district[selectedOptionDistrict.label];

        temp.map((value, index) => {
            let object = {};
            object.value = index;
            object.label = value;
            optionsCommune.push(object);
        })
    };

    handleChangeCommune = selectedOptionCommune => {
        this.setState({ selectedOptionCommune });
    };


    render() {
        const { selectedOptionCity } = this.state.city;
        const { selectedOptionDistrict } = this.state.district;
        const { selectedOptionCommune } = this.state.commune;

        const style_select = {
            width: "30%",
            padding: "10px 0",
            marginLeft: "35%",
        }
        return (
            <div>
                <div style={style_select}>
                    <Select styles={style_select}
                        value={selectedOptionCity}
                        onChange={this.handleChangeCity}
                        options={optionsCity}
                    />
                </div>
                <div style={style_select}>
                    <Select
                        value={selectedOptionDistrict}
                        onChange={this.handleChangeDistrict}
                        options={optionsDistrict}
                    />
                </div>
                <div style={style_select}>
                    <Select
                        value={selectedOptionCommune}
                        onChange={this.handleChangeCommune}
                        options={optionsCommune}
                    />
                </div>
            </div>
        );
    }
}

export default Selection;