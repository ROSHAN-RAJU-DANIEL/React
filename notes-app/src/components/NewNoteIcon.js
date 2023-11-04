import React from 'react';

const NewNoteIcon = ({ onClick }) => {
    return (
        <div
            className="w-[260px] h-[40px] flex items-center bg-gray-300 rounded-3 gap-8 cursor-pointer"
            onClick={onClick}
        >
            <span className="text-xl">➕</span>
            <span>New Note</span>
        </div>
    );
};

export default NewNoteIcon;
