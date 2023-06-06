import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import AddNote from './AddNote';
import Note from './Note';

function App() {

  var [notes, setNotes] = useState([]);
  console.log(notes);


  function addNote(title, content) {
    setNotes(prev => {
      return ([...prev, { title: title, content: content }])
    })
  }

  function deleteNote(id) {
    setNotes(prev => {
      return ( prev.filter( (item,index)=> {
        return index!==id;
      }))
    })
  }

  return (
    <div>
      <Header />
      <AddNote addNote={addNote} />
      {notes.map((note,index) => (<Note deleteNote={deleteNote} title={note.title} content={note.content} key={index} id={index} />))}



      <Footer />
    </div>
  );
}

export default App;
