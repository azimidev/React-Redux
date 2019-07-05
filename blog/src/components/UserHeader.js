import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

class UserHeader extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const user = this.props.users.find(user => {
            return user.id === this.props.userId;
        });

        if ( ! user) {
            return null;
        }

        return (
            <div className="header">
                { user.name }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
