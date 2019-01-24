import React from "react";

function Delete(props) {

    return <button className="delete" onClick={() => props.deleteSaved(props)}>Delete</button>
}

export default Delete;