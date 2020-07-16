import React, { useState } from "react";
import ReactDOM from "react-dom";
import Notes from "./Notes";
import NoteForm from "./NoteForm";
import "./App.css"

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <h1>My Notes</h1>
      <NoteForm notes={notes} setNotes={setNotes} />
      <Notes notes={notes} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
