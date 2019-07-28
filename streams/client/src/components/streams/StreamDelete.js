import React from 'react'
import Modal from '../Modal';
import history from '../../history';

export default (props) => {
    const actions = (
        <React.Fragment>
            <button className="ui negative button">Delete</button>
            <button className="ui cancel button" onClick={(e) => history.push('/')}>Cancel</button>
        </React.Fragment>
    );
    return (
        <div>
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={actions}
            />
        </div>
    );
};
