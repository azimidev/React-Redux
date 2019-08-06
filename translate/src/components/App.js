import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export default class App extends Component {
    state = {
        language: 'english',
        color: 'primary',
    };

    onLanguageChange = (language, color) => {
        this.setState({ language, color });
    }

    render() {
        return (
            <div className='ui container'>
                <div>
                    <p>Select a language:</p>
                    <i className='flag us' onClick={() => this.onLanguageChange('english', 'primary')} />
                    <i className='flag ir' onClick={() => this.onLanguageChange('persian', 'red')} />
                </div>
                <ColorContext.Provider value={this.state.color}>
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    };
}
