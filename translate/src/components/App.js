import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

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
                <LanguageSelector onLanguageChange={this.onLanguageChange} />
                <ColorContext.Provider value={this.state.color}>
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    };
}
