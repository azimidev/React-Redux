import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {

    static contextType = LanguageContext;

    render() {
        console.log(this.context);
        return (
            <button className='button ui primary'>
                Submit
            </button>
        );
    };
}

// This is another way of using context:
// Button.contextType = LanguageContext;

export default Button;
