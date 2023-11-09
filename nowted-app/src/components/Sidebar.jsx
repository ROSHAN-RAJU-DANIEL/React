import React from "react";
import NewNoteIcon from "./NewNoteIcon";
import { useDispatch, useSelector } from 'react-redux';
import { setShowFavorites } from '../redux/slice'


const Sidebar = ({ onNewNoteClick, onNoteSelect }) => {
    const dispatch = useDispatch();

    const handleNewNoteClick = () => {
        dispatch(setShowFavorites(false));
        onNewNoteClick();
    };

    const notes = useSelector((state) => state.notes.notes);
    const sortedNotes = [...notes].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    return (
        <div className="w-[350px] h-screen bg-[#171717] p-30" style={{ overflowY: sortedNotes.length > 6 ? "scroll" : "hidden", overflowX: "hidden" }}>
            <NewNoteIcon onClick={handleNewNoteClick} />
            <div className="h-screen">
                {sortedNotes.length > 0 && (
                    <div>
                        {sortedNotes.map((note) => (
                            <div
                                key={note.id}
                                onClick={() => onNoteSelect(note)}
                                className="cursor-pointer"
                            >
                                <div className="h-24 p-4 bg-[#262626] text-white text-center m-4">
                                    <div className="mb-2 font-source-sans-pro text-md">{note.title}</div>
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
