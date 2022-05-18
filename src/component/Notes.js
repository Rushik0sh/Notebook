import React, { useContext } from "react";
import Noteitem from "./Noteitem";
import { AddNote } from "./AddNote";
import noteContext from "../context/notes/noteContext";

export const Notes = () => {
  const context = useContext(noteContext);
  const { notes  } = context;
  // const { notes , addNote } = context;
    // eslint-disable-next-line
  return (
    <>
    <AddNote/>
    <div className="row my-3">
      <h1>You Notes</h1>
      {notes.map((note) => {
        return <Noteitem note={note} key={note.id}/>
      })}
    </div>
    </>
  );
};

export default Notes