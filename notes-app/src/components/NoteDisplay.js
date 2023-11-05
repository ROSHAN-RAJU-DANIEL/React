import React from "react";
import NoteForm from "./NoteForm";
import NotepadIcon from "../assets/Frame.svg";

const NoteDisplay = ({ selectedNote, creatingNote, onCreateNote, onEditNote, onDeleteNote, onCancel }) => {

    const handleDelete = () => {
        if (selectedNote) {
            onDeleteNote(selectedNote.id);
        }
    };

    return (
        <div className="flex-1 h-screen p-50 bg-black relative">
            {creatingNote || selectedNote ? (
                <div className="flex items-center justify-center h-full">
                    <NoteForm
                        onSave={(newNote) => {
                            creatingNote ? onCreateNote(newNote) : onEditNote(newNote);
                        }}
                        onCancel={() => onCancel()}
                        initialNote={selectedNote}
                    />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-full">
                    <img src={NotepadIcon} alt="NotepadIcon" />
                    <p className="text-white text-xl mt-4">Select a note to view</p>
                </div>
            )}
            {selectedNote ? (
                <button onClick={handleDelete} className="absolute top-4 right-4 bg-black text-white hover:bg-red-600 font-semibold rounded-full">
                    🗑️
                </button>
            ) : null}
        </div>
    );
};

export default NoteDisplay;
