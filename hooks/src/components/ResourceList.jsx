import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async resource => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

        setResources(data);
    };

    // lifectcle hook replacement
    useEffect(() => {
        fetchResource(resource);
    }, [resource]); // --> if recourse changes this component will re-render

    return <div>{resources.length}</div>;
};

export default ResourceList;
