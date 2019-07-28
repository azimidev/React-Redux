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

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }
        return `Are you sure you want to delete this stream with title ${this.props.stream.title}?`
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamDelete);
