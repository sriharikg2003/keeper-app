import {useState,useEffect} from 'react';
import Axios from 'axios';
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import mongoose from "mongoose";

function App() {

  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  }


  const [users,setUsers] = useState([])
  const [Title,setTitle] = useState ("")
  const [myId,setId] = useState (generateRandomString(5))
  const [Content,setContent] = useState ("")
  useEffect( ()=>{

    Axios.get("http://localhost:3001/getUsers").then(response =>{
     setUsers( response.data)
    })

  
  },[])

  function handleClick() {

    setId(generateRandomString(5));

  

    Axios.post("http://localhost:3001/addUser", {
      Title: Title,
      Content: Content,
      myId : myId
    })
      .then(response => {
        const newUser = { ...response.data}; 
        setUsers(prev => [...prev, newUser]);
        setContent("");
        setTitle("");
        console.log(users);
      })
      .catch(error => {
        console.error("Error adding user:", error);
      });
  }



function deleteUser(id) {
  console.log(id);
  Axios.post("http://localhost:3001/deleteUser", {
    myId: id
  })
    .then(response => {
      if (response.data.success) {
        setUsers(prev => prev.filter(item => item.myId !== id));
        console.log(users); // Check if the state is updated
      }
    })
    .catch(error => {
      console.log(error);
    });
}

  return (
    <div className="AddNote">
        <Header />
        <div className="notesection">
        <input name="Title" className="Title" type="text" value={Title} placeholder = "Add Title"  onChange={  (event)=> {setTitle(event.target.value)} }/>
        <input name="Content" className="Note" type="text" value = {Content}placeholder = "Add Note" onChange={  (event)=> {setContent(event.target.value)} }/>
    
        <button  type="submit" onClick = {handleClick}
        className="notebtn" > + </button>
        </div>
        {users.map((note,index) => (<Note Title={note.Title} key={index} Content={note.Content} myId = {note.myId} Delete = { deleteUser}/>))}


        <Footer />
    </div>

    
)
}

export default App;