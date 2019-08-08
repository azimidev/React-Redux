import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = () => {
    const [resources, setResources] = useState([]);

    const fetchResource = async () => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

        this.setState({ resources: data });
    };

    return <div>{resources.length}</div>;
};

export default ResourceList;
