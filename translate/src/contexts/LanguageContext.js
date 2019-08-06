import React from 'react';

const Context = React.createContext('english');

// WHERE CAN I GET MY SOURCE OF DATA?
// 1. Giving default value
// 2. Provider from parent component

// =================================

// HOW TO USE CONTEXTS?
// 1. this.context
// 2. Consumer

export class LanguageStore extends React.Component {

    state = { language: 'english', color: 'primary' };

    onLanguageChange = (language, color) => {
        this.setState({ language, color });
    };

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;
