import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

export default () => {
    const [resource, setResource] = useState("posts");

    return (
        <div>
            <h1>Users</h1>
            <UserList />
            <div>
                <button onClick={() => setResource("posts")}>Posts</button>
                <button onClick={() => setResource("todos")}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
};
