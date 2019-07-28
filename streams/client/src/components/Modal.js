import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

export default (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={() => history.push('/')}>
            <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
                <div className="header">Delete Stream</div>
                <div className="content">
                    Are you sure you want to delete this stream?
                </div>
                <div className="actions">
                    <button className="ui red button">Delete</button>
                    <button className="ui cancel button" onClick={(e) => history.push('/')}>Cancel</button>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};
