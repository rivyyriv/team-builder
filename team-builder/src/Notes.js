import React from "react";

const Notes = props => {
  return (
    <div className="note-list">
      {props.notes.map((note, i) => (
        <div className="note" key={i}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
