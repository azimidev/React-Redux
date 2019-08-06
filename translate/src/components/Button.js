import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {

    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Submit' : 'بفرست';
        return (
            <button className='button ui primary'>
                {text}
            </button>
        );
    };
}

// This is another way of using context:
// Button.contextType = LanguageContext;

export default Button;
