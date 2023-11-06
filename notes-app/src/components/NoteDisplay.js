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
                    />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-full">
                    <img src={NotepadIcon} alt="NotepadIcon" />
                    <p className="text-white text-xl mt-4">Select a note to view</p>
                    <p className="text-white mt-2">
                        Choose a note from the listto view its contents, or create a new note to add to your collection.
                    </p>
                </div>
            )}
        </div>
    );
};

export default NoteDisplay;
