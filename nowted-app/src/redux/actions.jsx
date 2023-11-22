import { createAsyncThunk } from '@reduxjs/toolkit';
import { createNote, updateNote, deleteNote, toggleFavourite, getFavoriteNotes, getDeletedNotes, getFolderNotes } from '../service/ApiService';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async ({ showFavorites, showDeleted, selectedFolder, searchText = "" }) => {
    if (showFavorites) {
        return getFavoriteNotes(searchText);
    } else if (showDeleted) {
        return getDeletedNotes(searchText);
    } else {
        return getFolderNotes(selectedFolder, searchText);
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