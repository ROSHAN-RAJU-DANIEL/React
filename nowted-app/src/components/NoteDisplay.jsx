import React from "react";
import NoteForm from "./NoteForm";
import NotepadIcon from "../assets/Frame.svg";
import RestorePic from "../assets/RestorePic.svg";
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
    const showDeleted = useSelector((state) => state.notes.showDeleted);


    const onCreateNote = (newNote) => {
        dispatch(createNoteAsync(newNote));
        dispatch(setCreatingNote(false));
        dispatch(fetchNotes({ showFavorites, showDeleted }));
    };

    const onEditNote = (updatedNote) => {
        dispatch(updateNoteAsync(updatedNote));
        dispatch(setSelectedNoteItem(null));
        dispatch(fetchNotes({ showFavorites, showDeleted }));
    };

    const handleDelete = () => {
        dispatch(deleteNoteAsync(selectedNote.id));
        dispatch(setSelectedNoteItem(null));
    };

    const handleRestore = () => {
        dispatch(deleteNoteAsync(selectedNote.id));
        dispatch(setSelectedNoteItem(null));
        dispatch(fetchNotes({ showFavorites, showDeleted }));
    };

    const onCancel = () => {
        dispatch(setCreatingNote(false));
        dispatch(setSelectedNoteItem(null));
        dispatch(fetchNotes({ showFavorites, showDeleted }));
    };

    const handleFavourite = () => {
        dispatch(toggleFavouriteAsync(selectedNote.id))
    }

    return (
        <div className="flex-1 h-screen p-50 bg-[#0a0a0a] relative">
            {creatingNote || selectedNote ? (
                <div className="flex items-center justify-center h-full">
                    {selectedNote && selectedNote.deleted ? (
                        <div className="flex flex-col items-center text-center justify-center">
                            <img src={RestorePic} alt="RestorePic" className="w-10 h-10 mb-4" />
                            <p className="text-white text-xl mt-2">Cannot view contents. Note is deleted.</p>
                            <p className="text-white text-sm mt-2">Don't want to lose this note? It's not too late! Just click the 'Restore' button and it will be added back to your list. It's that simple.</p>
                            <button className="bg-[#312EB5] text-white px-4 py-2 mt-4" onClick={handleRestore}>
                                Restore
                            </button>
                        </div>
                    ) : (
                        <NoteForm
                            onSave={(newNote) => {
                                creatingNote ? onCreateNote(newNote) : onEditNote(newNote);
                            }}
                            onCancel={() => onCancel()}
                            onDelete={handleDelete}
                            onFavourite={handleFavourite}
                        />
                    )}
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
