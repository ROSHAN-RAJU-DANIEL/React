import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedNoteItem } from '../redux/slice'


const Sidebar = () => {
    const dispatch = useDispatch();
    const handleNoteSelect = (note) => {
        dispatch(setSelectedNoteItem(note))
    }

    const notes = useSelector((state) => state.notes.notes);
    const selectedNoteItem = useSelector((state) => state.notes.selectedNoteItem);
    const sortedNotes = [...notes].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    const selectedFolder = useSelector((state) => state.notes.selectedFolder);

    return (
        <div className="w-[350px] h-screen bg-[#171717] p-30" style={{ overflowY: sortedNotes.length > 6 ? "scroll" : "hidden", overflowX: "hidden" }}>
            <div className="h-screen">
                <span className="p-4 font-source-sans-pro text-[#737373] text-xl font-bold text-center mt-4">{selectedFolder}</span>
                {sortedNotes.length > 0 && (
                    <div>
                        {sortedNotes.map((note) => (
                            <div
                                key={note.id}
                                onClick={() => handleNoteSelect(note)}
                                className="cursor-pointer"
                            >
                                <div className={`h-24 p-4 text-white text-center mt-8 mx-4 ${note.id === selectedNoteItem?.id ? 'bg-[#312EB5] text-white' : 'bg-[#262626]'}`}>
                                    <div className="mb-2 font-source-sans-pro text-md">{note.title}</div>
                                    <div className="text-sm truncate text-gray-400">{new Date(note.updatedAt).toLocaleDateString()}  {note.content}</div>
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
