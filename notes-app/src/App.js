import React, { useState, useEffect } from 'react';
import NoteDisplay from './components/NoteDisplay';
import Sidebar from './components/Sidebar';
import { createNote, getNotes, updateNote } from './data/NoteService';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [creatingNote, setCreatingNote] = useState(false);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const handleCreateNote = (newNote) => {
    createNote(newNote);
    setNotes(getNotes());
    setCreatingNote(false);
  };

  const handleEditNote = (updatedNote) => {
    updateNote(updatedNote);
    setNotes(getNotes());
    setSelectedNote(null);
  };

  const handleCancel = () => {
    setCreatingNote(false);
    setSelectedNote(null);
  };

  return (
    <div className="flex gap-30">
      <Sidebar
        onNewNoteClick={() => setCreatingNote(true)}
        onNoteSelect={(note) => setSelectedNote(note)}
        savedNotes={notes}
      />
      <NoteDisplay
        selectedNote={selectedNote}
        creatingNote={creatingNote}
        onCreateNote={handleCreateNote}
        onEditNote={handleEditNote}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default App;
