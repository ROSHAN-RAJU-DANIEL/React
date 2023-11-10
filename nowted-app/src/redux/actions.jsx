import { createAsyncThunk } from '@reduxjs/toolkit';
import { createNote, getNotes, updateNote, deleteNote, toggleFavourite, getFavoriteNotes, getDeletedNotes } from '../service/ApiService';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async ({ showFavorites, showDeleted }) => {
    if (showFavorites) {
        return getFavoriteNotes();
    } else if (showDeleted) {
        return getDeletedNotes();
    } else {
        return getNotes();
    }
});

export const createNoteAsync = createAsyncThunk('notes/createNote', async (newNote) => {
    return createNote(newNote);
});

export const updateNoteAsync = createAsyncThunk('notes/updateNote', async (updatedNote) => {
    return updateNote(updatedNote);
});

export const deleteNoteAsync = createAsyncThunk('notes/deleteNote', async (noteId) => {
    return deleteNote(noteId);
});

export const toggleFavouriteAsync = createAsyncThunk('notes/toggleFavourite', async (noteId) => {
    return toggleFavourite(noteId);
});