import React, { useState, useEffect } from 'react';
import NoteDisplay from './components/NoteDisplay';
import Sidebar from './components/Sidebar';
import LeftSidebar from './components/LeftSideBar';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNotes,
  createNoteAsync,
  updateNoteAsync,
  deleteNoteAsync,
  toggleFavouriteAsync,
} from './redux/actions';

import { setShowFavorites } from './redux/slice'

function App() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [creatingNote, setCreatingNote] = useState(false);
  const dispatch = useDispatch();
  const showFavorites = useSelector((state) => state.notes.showFavorites);


  useEffect(() => {
    dispatch(fetchNotes(showFavorites));
  }, [showFavorites, dispatch]);

  const handleCreateNote = (newNote) => {
    dispatch(createNoteAsync(newNote));
    setCreatingNote(false);
    dispatch(fetchNotes(showFavorites));
  };

  const handleEditNote = (updatedNote) => {
    dispatch(updateNoteAsync(updatedNote));
    setSelectedNote(null);
    dispatch(fetchNotes(showFavorites));
  };

  const handleDeleteNote = (noteId) => {
    dispatch(deleteNoteAsync(noteId));
    setSelectedNote(null);
  };

  const handleCancel = () => {
    setCreatingNote(false);
    setSelectedNote(null);
    dispatch(fetchNotes(showFavorites));
  };

  const handleFavourite = (noteId) => {
    dispatch(toggleFavouriteAsync(noteId))
  }

  const handleShowFavorites = () => {
    dispatch(setShowFavorites(true));
  };

  return (
    <div className="flex gap-30">
      <LeftSidebar onShowFavoritesClick={handleShowFavorites} />
      <Sidebar
        onNewNoteClick={() => setCreatingNote(true)}
        onNoteSelect={(note) => setSelectedNote(note)}
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
