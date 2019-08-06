import React, { Component } from 'react';
import UserCreate from './UserCreate';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';
import { LanguageStore } from '../contexts/LanguageContext';

export default class App extends Component {
    render() {
        return (
            <div className='ui container'>
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    };
}
