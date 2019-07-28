import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import Modal from '../Modal';
import { fetchStream } from '../../actions'

export class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        return (
            <React.Fragment>
                <button className="ui negative button">Delete</button>
                <button className="ui cancel button" onClick={() => history.push('/')}>Cancel</button>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                <Modal
                    title="Delete Stream"
                    content="Are you sure you want to delete this stream?"
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        );
    }
}

export default connect(null, { fetchStream })(StreamDelete);
