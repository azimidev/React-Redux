import React, { Component } from 'react';
import UserCreate from './UserCreate';

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
                <UserCreate />
            </div>
        );
    };
}
