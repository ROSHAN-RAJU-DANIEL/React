import React from "react";
import NewNoteIcon from "./NewNoteIcon";

const Sidebar = ({ onNewNoteClick, onNoteSelect, savedNotes }) => {
    return (
        <div className="w-[350px] h-screen bg-[#171717] p-30" style={{ overflowY: savedNotes.length > 0 ? "scroll" : "hidden" }}>
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
                                <div className="h-20 p-6 bg-[#262626] text-white text-center rounded-md m-4">
                                    <div className="text-lg font-sans">{note.title}</div>
                                    <div className="text-sm truncate text-gray-500">{note.content}</div>
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
