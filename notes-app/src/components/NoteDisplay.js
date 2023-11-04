import React from "react";
import NoteForm from './NoteForm';

const NoteDisplay = ({ selectedNote, creatingNote, onCreateNote, onEditNote, onCancel }) => {
    return (
        <div className="w-3/4 h-screen p-30">
            {creatingNote ? (
                <NoteForm
                    onSave={(newNote) => {
                        onCreateNote(newNote);
                    }}
                    onCancel={() => onCancel()}
                />
            ) : selectedNote ? (
                <NoteForm
                    onSave={(updatedNote) => {
                        onEditNote(updatedNote);
                    }}
                    onCancel={() => onCancel()}
                    initialNote={selectedNote}
                />
            ) : (
                <></>
            )}
        </div>
    );
};

export default NoteDisplay;
