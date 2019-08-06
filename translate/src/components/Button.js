import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {

    // 1. Provider:
    // static contextType = LanguageContext;

    render() {
        return (
            <button className='button ui primary'>
                {/* 2. Comsumer: */}
                <LanguageContext.Consumer>
                    {value => value === 'english' ? 'Submit' : 'بفرست'}
                </LanguageContext.Consumer>
            </button>
        );
    };
}

// This is another way of using context provider:
// Button.contextType = LanguageContext;

export default Button;
