import React from "react";
import {useState} from 'react';



function AddNote(props){

    var [title,setTitle] = useState("");
    var [content,setContent] = useState("");

    function updateContent(event){
        setContent(event.target.value);
    }

    function updateTitle(event){
        setTitle(event.target.value);
    }

    return (
            <div className="AddNote">
                <input name="Title" className="Title"type="text" placeholder = "Add Title" value= {title} onChange={updateTitle}/>
                <input name="Content" className="Note"type="text" placeholder = "Add Note" value={content} onChange={updateContent}/>
                <button onClick = { () =>{
                    props.addNote(title,content); 
                    setContent("");
                    setTitle("")}}
                    
                className="notebtn" > + </button>
            </div>
    )
}


export default AddNote;