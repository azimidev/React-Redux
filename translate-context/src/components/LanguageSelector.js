import React,  { Component } from 'react';
import Context from '../contexts/LanguageContext';

export class LanguageSelector extends Component {

    static contextType = Context;

    render() {
        return (
            <div>
                <p>Select a language:</p>
                <i
                    className='flag us'
                    onClick={() => this.context.onLanguageChange('english')}
                />
                <i
                    className='flag ir'
                    onClick={() => this.context.onLanguageChange('persian')}
                />
            </div>
        );
    };
}

export default LanguageSelector;
