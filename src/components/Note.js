import React from "react";

function Note(props){
    return(
       <div className = 'note' >
        <b>{props.title}</b>

        <p>{props.content}</p>
        <div className=" dustBin" onClick = { ()=> {
            props.deleteNote(props.id);
        } }>🗑️</div>
       </div>
    );
}

export default Note;