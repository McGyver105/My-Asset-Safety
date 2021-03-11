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
                onSubmit={this.handleSubmit}
            >
                <label>Find destination from:
                 <input list="systems"
                        onChange={this.handleType}
                        value={userInput}
                    >
                    </input>
                    <datalist
                        id="systems"
                    >
                        {filteredArray.map((system, index) => {
                            return <option key={index} value={system}></option>;
                        })}
                    </datalist>
                </label>
                <button>Submit</button>
            </form>
            <Destination origin={this.state.selectedSystem} />
        </>);
    }

    handleType = (event) => {
        this.setState(() => {
            return { userInput: event.target.value };
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(() => {
            return { selectedSystem: event.target[0].value };
        });
    };
}

export default SearchBox;