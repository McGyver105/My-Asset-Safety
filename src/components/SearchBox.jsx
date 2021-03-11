import React, { Component } from 'react';
import * as api from '../utils/utils'
import Destination from './Destination';

class SearchBox extends Component {

    state = {
        allSystems: [],
        userInput: '',
        selectedSystem: ''
    }

    componentDidMount () {
        this.setState(() => {
            return {allSystems: api.getAllSystems()}
        })
    }

    render () {
        console.log('selected', this.state.selectedSystem)
        const { allSystems, userInput } = this.state;
        const searchRegex = new RegExp(`^${userInput}`, 'i');
        const filteredArray = allSystems.filter((system) => {
            return searchRegex.test(system);
        })
        if (filteredArray.length === 0) filteredArray.push('system not found')
        if (allSystems.length === 0) return <p>Loading</p>;
        else return (<>
            <form
                onSubmit={(event) => {
                    this.handleSubmit(event, filteredArray)
                }}
            >
                <label>
                    Enter System:
                    <input
                        type="textbox"
                        onChange={this.handleType}
                        placeholder="start typing system"
                        value={userInput}
                    >
                    </input>
                </label>
                <select
                    onChange={this.handleDropDown}
                >{filteredArray.map((system, index) => {
                    return <option name={system} key={index}>{system}</option>;
                })}</select>
                <button>Find Destination from: </button>
            </form>
            <Destination origin={this.state.selectedSystem}/>
        </>);
    }

    handleType = (event) => {
        this.setState(() => {
            return { userInput: event.target.value };
        });
    }

    handleDropDown = (event) => {
        this.setState(() => {
            return { selectedSystem: event.target.value };
        });
    }

    handleSubmit = (event, filteredArray) => {
        event.preventDefault();
        this.setState((current) => {
            return { userInput: '', selectedSystem: filteredArray[0] || current.selectedSystem };
        });
    };
}

export default SearchBox;