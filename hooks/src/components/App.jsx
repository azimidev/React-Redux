import React, { useState } from "react";

export default () => {
    const [resource, setResource] = useState("posts");

    return (
        <div>
            <div>
                <button onClick={() => setResource("posts")}>Posts</button>
                <button onClick={() => setResource("todos")}>Todos</button>
            </div>
            {resource}
        </div>
    );
};
