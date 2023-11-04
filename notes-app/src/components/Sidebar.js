import React from "react";
import NewNoteIcon from "./NewNoteIcon";

const Sidebar = ({ onNewNoteClick, onNoteSelect, savedNotes }) => {
    return (
        <div className="w-[350px] h-screen bg-gray-200 p-30">
            <NewNoteIcon onClick={onNewNoteClick} />
            {savedNotes.length > 0 && (
                <div className="w-fill">
                    {savedNotes.map((note) => (
                        <div
                            key={note.id}
                            onClick={() => onNoteSelect(note)}
                            className="cursor-pointer"
                        >
                            <div className="h-[98px] p-20 bg-gray-300 rounded-3 mb-8 mt-8">
                                {note.title}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Sidebar;
