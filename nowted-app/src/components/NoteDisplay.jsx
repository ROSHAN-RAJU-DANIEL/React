import React from "react";
import NoteForm from "./NoteForm";
import NotepadIcon from "../assets/Frame.svg";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedNoteItem, setCreatingNote } from '../redux/slice'
import {
    fetchNotes,
    createNoteAsync,
    updateNoteAsync,
    deleteNoteAsync,
    toggleFavouriteAsync,
} from '../redux/actions'

const NoteDisplay = () => {

    const dispatch = useDispatch();
    const creatingNote = useSelector((state) => state.notes.creatingNote);
    const selectedNote = useSelector((state) => state.notes.selectedNoteItem);
    const showFavorites = useSelector((state) => state.notes.showFavorites);

    const onCreateNote = (newNote) => {
        dispatch(createNoteAsync(newNote));
        dispatch(setCreatingNote(false));
        dispatch(fetchNotes(showFavorites));
    };

    const onEditNote = (updatedNote) => {
        dispatch(updateNoteAsync(updatedNote));
        dispatch(setSelectedNoteItem(null));
        dispatch(fetchNotes(showFavorites));
    };

    const handleDelete = () => {
        dispatch(deleteNoteAsync(selectedNote.id));
        dispatch(setSelectedNoteItem(null));
    };

    const onCancel = () => {
        dispatch(setCreatingNote(false));
        dispatch(setSelectedNoteItem(null));
        dispatch(fetchNotes(showFavorites));
    };

    const handleFavourite = () => {
        dispatch(toggleFavouriteAsync(selectedNote.id))
    }

    return (
        <div className="flex-1 h-screen p-50 bg-[#0a0a0a] relative">
            {creatingNote || selectedNote ? (
                <div className="flex items-center justify-center h-full">
                    <NoteForm
                        onSave={(newNote) => {
                            creatingNote ? onCreateNote(newNote) : onEditNote(newNote);
                        }}
                        onCancel={() => onCancel()}
                        initialNote={selectedNote}
                        onDelete={handleDelete}
                        onFavourite={handleFavourite}
                    />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-full">
                    <img src={NotepadIcon} alt="NotepadIcon" />
                    <p className="text-white text-xl mt-4">Select a note to view</p>
                    <p className="text-white mt-2">
                        Choose a note from the list to view its contents, or create a new note to add to your collection.
                    </p>
                </div>
            )}
        </div>
    );
};

export default NoteDisplay;
