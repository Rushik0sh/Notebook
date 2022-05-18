import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote  } = context;
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repudiandae, voluptatem, sequi Perferendis.
          </p>
          <i className="fa fa-trash-o mx-2" onClick={()=>{deleteNote(note.id)}}></i>
          <i className="fa fa-pencil-square-o mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
