import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

export default (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={() => history.push('/')}>
            <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};
