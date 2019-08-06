import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

export default class App extends Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState({ language });
    }

    render() {
        return (
            <div className='ui container'>
                <div>
                    <p>Select a language:</p>
                    <i className='flag us' onClick={() => this.onLanguageChange('english')} />
                    <i className='flag ir' onClick={() => this.onLanguageChange('persian')} />
                </div>
                {/* 1. Provider */}
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        );
    };
}
