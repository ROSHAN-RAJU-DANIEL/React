import { createAsyncThunk } from '@reduxjs/toolkit';
import { createNote, getNotes, updateNote, deleteNote, toggleFavourite, getFavoriteNotes } from '../service/ApiService';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async (showFavorites, creatingNote) => {
    if (showFavorites) {
        return getFavoriteNotes();
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