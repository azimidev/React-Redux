import React, { Component } from "react";
import axios from "axios";

class ResourceList extends Component {
    state = { resources: [] };

    async componentDidMount() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

        this.setState({ resources: data });
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.resource !== this.props.resource) {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

            this.setState({ resources: data });
        }
    }

    render() {
        return <div>{this.state.resources.length}</div>;
    }
}

export default ResourceList;
