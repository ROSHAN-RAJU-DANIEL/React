import { createSlice } from '@reduxjs/toolkit';
import { fetchNotes, createNoteAsync, updateNoteAsync, deleteNoteAsync, toggleFavouriteAsync } from './actions'

const notesSlice = createSlice({
    name: 'notes',
    initialState: { notes: [], showFavorites: false, showDeleted: false, selectedNoteItem: null, creatingNote: false, status: 'idle', error: null },
    reducers: {
        setShowFavorites: (state, action) => {
            state.showFavorites = action.payload;
        },
        setSelectedNoteItem: (state, action) => {
            state.selectedNoteItem = action.payload;
        },
        setCreatingNote: (state, action) => {
            state.creatingNote = action.payload;
        },
        setShowDeleted: (state, action) => {
            state.showDeleted = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.notes = action.payload;
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createNoteAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.notes.push(action.payload);
            })
            .addCase(updateNoteAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const updatedNoteIndex = state.notes.findIndex((note) => note.id === action.payload.id);
                state.notes[updatedNoteIndex] = action.payload;
            })
            .addCase(deleteNoteAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const deletedNoteIndex = state.notes.findIndex((note) => note.id === action.payload);
                state.notes.splice(deletedNoteIndex, 1);
            })
            .addCase(toggleFavouriteAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const updatedNoteIndex = state.notes.findIndex((note) => note.id === action.payload.id);
                state.notes[updatedNoteIndex].favourite = action.payload.favourite;
            });
    },
});

export const { setShowFavorites, setSelectedNoteItem, setCreatingNote, setShowDeleted } = notesSlice.actions;

export default notesSlice.reducer;
