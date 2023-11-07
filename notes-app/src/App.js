import React, { useState, useEffect } from 'react';
import NoteDisplay from './components/NoteDisplay';
import Sidebar from './components/Sidebar';
import LeftSidebar from './components/LeftSideBar';
import { createNote, getNotes, updateNote, deleteNote, toggleFavourite } from './data/ApiService';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [creatingNote, setCreatingNote] = useState(false);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const notesData = await getNotes();
        setNotes(notesData);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }
    fetchNotes();
  }, [notes]);

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

  const handleDeleteNote = (noteId) => {
    deleteNote(noteId);
    setNotes(getNotes());
    setSelectedNote(null);
  };

  const handleCancel = () => {
    setCreatingNote(false);
    setSelectedNote(null);
  };

  const handleFavourite = (noteId) => {
    toggleFavourite(noteId)
  }

  return (
    <div className="flex gap-30">
      <LeftSidebar />
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
        onDeleteNote={handleDeleteNote}
        onCancel={handleCancel}
        selectFavourite={handleFavourite}
      />
    </div>
  );
}

export default App;
