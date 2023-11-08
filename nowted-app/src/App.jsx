import React, { useState, useEffect } from 'react';
import NoteDisplay from './components/NoteDisplay';
import Sidebar from './components/Sidebar';
import LeftSidebar from './components/LeftSideBar';
import { createNote, getNotes, updateNote, deleteNote, toggleFavourite, getFavoriteNotes } from './service/ApiService';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [creatingNote, setCreatingNote] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const notesData = showFavorites ? await getFavoriteNotes() : await getNotes();
        setNotes(notesData);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }
    fetchNotes();
  }, [showFavorites]);

  const handleCreateNote = async (newNote) => {
    try {
      await createNote(newNote);
      const updatedNotes = await getNotes();
      setNotes(updatedNotes);
      setCreatingNote(false);
    } catch (error) {
      console.error('Error creating note:', error);
    }
  }

  const handleEditNote = async (updatedNote) => {
    try {
      await updateNote(updatedNote);
      const updatedNotes = await getNotes();
      setNotes(updatedNotes);
      setSelectedNote(null);
    } catch (error) {
      console.error('Error editing note:', error);
    }
  }

  const handleDeleteNote = async (noteId) => {
    try {
      await deleteNote(noteId);
      const updatedNotes = await getNotes();
      setNotes(updatedNotes);
      setSelectedNote(null);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  }

  const handleCancel = () => {
    setCreatingNote(false);
    setSelectedNote(null);
  };

  const handleFavourite = (noteId) => {
    toggleFavourite(noteId)
  }

  const handleShowFavorites = () => {
    setShowFavorites(true);
  };

  return (
    <div className="flex gap-30">
      <LeftSidebar onShowFavoritesClick={handleShowFavorites} />
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
