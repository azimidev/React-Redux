import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
    const [resources, setResources] = useState([]);

    // LifeCtcle Hook Replacement
    useEffect(() => {
        // 1:
        // axios.get(`https://jsonplaceholder.typicode.com/${resource}`).then(({ data }) => setResources(data))(

        // 2:
        (async resource => {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources(data);
        })(resource);
    }, [resource]); // --> if [recourse] changes, this component will re-render

    return (
        <ul>
            {resources.map(record => (
                <li key={record.id}>{record.title}</li>
            ))}
        </ul>
    );
};

export default ResourceList;
