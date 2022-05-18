import NoteContext from "./noteContext";
import React from "react";
import { useState } from "react";


const NoteState = (props) => {
  const host ="http://localhost:5000"
  // const s1 ={
  //     "name": "Harry",
  //     "class" : "5b"
  // }
  // const [state, setState] = useState(s1);
  // const update =()=>{
  //      setTimeout(() => {
  //         setState({
  //             "name":"Larry",
  //             "class":"10b"
  //         })
  //     }, 1000);
  // }
  // title: "Thunder Client",
  // body: "Good Extesion",
  // userId: 1,
  const notesintial = [
    {
      "id": "6132498465161",
      "user": "6844dv543551",
      "title": "My Title ",
      "description": "Please Wake up",
      "tag": "personal",
      "date": "2021-09-0314",
      "__v": 0
    },
    {
      "id": "6132498465162",
      "user": "6844dv543551",
      "title": "My Title ",
      "description": "Please Wake up",
      "tag": "personal",
      "date": "2021-09-0314",
      "__v": 1
    },
    {
      "id": "6132498465163",
      "user": "6844dv543551",
      "title": "My Title ",
      "description": "Please Wake up",
      "tag": "personal",
      "date": "2021-09-0314",
      "__v": 0
    },
    {
      "id": "6132498465164",
      "user": "6844dv543551",
      "title": "My Title ",
      "description": "Please Wake up",
      "tag": "personal",
      "date": "2021-09-0314",
      "__v": 1
    },
    {
      "id": "6132498465165",
      "user": "6844dv543551",
      "title": "My Title ",
      "description": "Please Wake up",
      "tag": "personal",
      "date": "2021-09-0314",
      "__v": 0
    },
    {
      "id": "6132498465166",
      "user": "6844dv543551",
      "title": "My Title ",
      "description": "Please Wake up",
      "tag": "personal",
      "date": "2021-09-0314",
      "__v": 1
    }
  ]

  const [notes, setNotes] = useState(notesintial);

  const addNote = (title, description, tag) => {
    console.log("Adding a new note")
    const note = {
      "id": "61324984651661",
      "user": "6844dv5435511",
      "title": "My Title Edit",
      "description": "Please Wake up Edit",
      "tag": "personal",
      "date": "2021-09-0314",
      "__v": 1
    }
    setNotes(notes.concat(note))
  }
  const deleteNote = (id) => {
    console.log("Deleting the note with id"+ id)
    const newNotes =notes.filter((note)=>{return note.id!==id})
    setNotes(newNotes)
  }
  const editNote = async(tag,description,title,id) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const json = response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element.id === id){
        element.tag = tag;
        element.description = description;
        element.title = title;
      }
    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
