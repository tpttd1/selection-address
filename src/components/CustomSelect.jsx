import React, { Component } from 'react';
import Option from './Option';
import styled from 'styled-components';
import fake from '../fake';

class CustomSelect extends Component {
    
    renderOption = () => {
        let { ...options } = this.props.options;
        if (options !== []) {
            return Object.keys(options).map(function (key) {
                return (
                    <Option
                        key={options[key].key}
                        value={options[key].value}
                    />
                )
            });
        }
    }


    render() {
        return (
            <SelectionArea>
                <select className="form-control" onChange={(e) => this.props.handleSelectChange(e)}>
                    <option></option>
                    {this.renderOption()}

                </select>
            </SelectionArea>
        )
    }
}


const SelectionArea = styled.div`
    width: 100% !important;
    padding: 10px 0;
    select {
        width: 100%;
        border-radius: 2px;
        padding: 10px 0 10px 10px;
    }
    select {
        
    }
    select:focus {
        border: 0.1px solid #66e0ff;
    }
    select:active {
        border: 0.1px solid #00ccff;
    }

`
export default CustomSelect;