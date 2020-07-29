import React, { Component } from 'react';
import CustomSelect from './CustomSelect';
import fake from './fake';
// import data from './data';


class App extends Component {
    constructor() {
        super();
        this.state = {
            city: [],
            district: [],
            commune: [],
            idCity: 0,
            idDistrict: 0,
        };
    }

    componentDidMount() {
        const data = fake;
        let arr_city = [];

        Object.keys(data).map(function (key) {
            let object = {};
            object.key = data[key].key;
            object.value = data[key].value.key;
            arr_city.push(object);
        });


        if (arr_city.length > 0) {
            console.log(arr_city);
            this.setState({
                city: [...arr_city]
            });

        }

    }

    getIDCityFromName = (name) => {
        const city = this.state.city;
        let IDCity = 0;
        Object.keys(city).map(function (index) {
            if (name === city[index].value) {
                IDCity = city[index].key;
                console.log(IDCity);
            }
        });
        this.setState({
            idCity: IDCity
        });
    }


    handleSelectChangeCity = (e) => {
        this.getIDCityFromName("Hà Nội");
        console.log(this.state.idCity);
        const data = fake;
        let arr_district = [];
        let { name, value } = e.target;

        Object.keys(data).map(function (index) {
            let object = {};
            object.key = data[index].value.key;
            object.value = data[index].value.value.key;

            arr_district.push(object);
        });

        if (arr_district.length > 0) {
            console.log(arr_district);
            this.setState({
                city: [...arr_district]
            });
        }
    }

    handleSelectChangeDistrict = (key) => {
        this.setState(() => {
            return {
                commune: key
            }
        })
    }

    handleSelectChangeCommune = (key) => {
        return 0;
    }

    render() {
        const container_style = {
            width: '20%',
            align: 'center',
            marginTop: '100px',
            marginLeft: '40%',

        }
        return (
            <div style={container_style}>
                <CustomSelect
                    options={this.state.city}
                    id={this.state.idCity}
                    handleSelectChange={this.handleSelectChangeCity}
                />
                <CustomSelect
                    options={this.state.district}
                    id={this.state.idDistrict}
                    handleSelectChange={this.handleSelectChangeDistrict}
                />
                <CustomSelect
                    options={this.state.commune}
                    handleSelectChange={this.handleSelectChangeCommune}
                />
            </div>
        )
    }
}

export default App;