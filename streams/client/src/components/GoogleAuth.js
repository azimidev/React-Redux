import React, { Component } from 'react';

export default class GoogleAuth extends Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                // TODO: This is not going to work! Replace it with your Client ID
                clientId: '1060645093787-u10abl9547l0dsvp3h2156dm1j930fnt.apps.googleusercontent.com',
                scope: 'email',
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
            });
        });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I don't know if we are signed in!</div>;
        } else if (this.state.isSignedIn) {
            return <div>We are signed in!</div>;
        } else {
            return <div>I'm not signed in!</div>;
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    };
};
