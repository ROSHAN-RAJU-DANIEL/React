import React from "react";
import NewNoteIcon from "./NewNoteIcon";

const Sidebar = ({ onNewNoteClick, onNoteSelect, savedNotes }) => {
    return (
        <div className="w-[350px] h-screen bg-[#171717] p-30" style={{ overflowY: savedNotes.length > 6 ? "scroll" : "hidden" }}>
            <NewNoteIcon onClick={onNewNoteClick} />
            <div className="h-screen">
                {savedNotes.length > 0 && (
                    <div>
                        {savedNotes.map((note) => (
                            <div
                                key={note.id}
                                onClick={() => onNoteSelect(note)}
                                className="cursor-pointer"
                            >
                                <div className="h-22 p-4 bg-[#262626] text-white text-center rounded-md m-4">
                                    <div className="mb-2 text-lg font-sans">{note.title}</div>
                                    <div className="text-sm truncate text-gray-500">{new Date(note.updatedAt).toLocaleDateString()}  {note.content}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
