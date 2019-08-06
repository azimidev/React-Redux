import React, { Component } from 'react';

export class LanguageSelector extends Component {
    render() {
        return (
            <div>
                <p>Select a language:</p>
                <i className='flag us' onClick={() => this.props.onLanguageChange('english', 'primary')} />
                <i className='flag ir' onClick={() => this.props.onLanguageChange('persian', 'red')} />
            </div>
        );
    };
}

export default LanguageSelector;
