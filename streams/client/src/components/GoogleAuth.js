import React, { Component } from 'react';

export default class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                // TODO: This is not going to work! Replace it with your Client ID
                clientId: '1060645093787-u10abl9547l0dsvp3h2156dm1j930fnt.apps.googleusercontent.com',
                scope: 'email',
            });
        });
    }

    render() {
        return (
            <div>
                GoogleAuth
            </div>
        );
    };
};
