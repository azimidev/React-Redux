import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {

    // 1. Provider:
    // static contextType = LanguageContext;

    render() {
        return (
            <ColorContext.Consumer>
                {
                    (color) => (
                        <button className={`button ui ${color}`}>
                            <LanguageContext.Consumer>
                                {
                                    ({ language }) => language === 'english' ? 'Submit' : 'بفرست'
                                }
                            </LanguageContext.Consumer>
                        </button>
                    )
                }
            </ColorContext.Consumer>
        );
    };
}

// This is another way of using context provider:
// Button.contextType = LanguageContext;

export default Button;
