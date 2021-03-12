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
        const { allSystems, userInput } = this.state;
        const searchRegex = new RegExp(`^${userInput}`, 'i');
        let noSystem = false;
        const filteredArray = allSystems.filter((system, index) => {
            return searchRegex.test(system);
        })
        if (filteredArray.length === 0) noSystem = true;
        if (allSystems.length === 0) return <p>Loading</p>;
        else return (
            <main className="App__Main">
                <form
                    className="SearchBox__form"
                    onSubmit={this.handleSubmit}
                >
                    <label className="form__label" >Assets currently in: 
                        <input
                            list="systems"
                            onChange={this.handleType}
                            onClick={this.handleClick}
                            value={userInput}
                            className="form__textBox"
                            placeholder={"type null-sec system"}
                        >
                        </input>
                        <datalist
                            id="systems"
                        >
                            {userInput.length !== 0 ?
                                filteredArray.map((system, index) => {
                                    return <option key={index} value={system}>{system}</option>;
                                })
                                : <option key={1} value={""}></option>}
                        </datalist>
                    </label>
                    <button
                        className="form__button"
                    >Go!</button>
                </form>
                <section className="SearchBox__DestComponent">
                    <Destination origin={this.state.selectedSystem} invalidSys={noSystem}/>
                </section>
            </main>);
    }

    handleType = (event) => {
        this.setState(() => {
            return { userInput: event.target.value, selectedSystem: '' };
        });
    }

    handleClick = () => {
        this.setState(() => {
            return { selectedSystem: '' };
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