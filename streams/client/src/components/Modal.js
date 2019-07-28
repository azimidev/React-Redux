import React from 'react';
import ReactDOM from 'react-dom';

export default props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                lorem ipsum sjdghfjhgkfj skjhgfdkjahsg
            </div>
        </div>,
        document.getElementById('modal')
    );
};
