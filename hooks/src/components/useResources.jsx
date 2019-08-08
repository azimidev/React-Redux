import { useState, useEffect } from "react";
import axios from "axios";

export default resource => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        (async resource => {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources(data);
        })(resource);
    }, [resource]);

    return resources;
};
