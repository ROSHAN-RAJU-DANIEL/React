import React from 'react';

const NewNoteIcon = ({ onClick }) => {
    return (
        <div
            className="w-[260px] h-[40px] flex items-center bg-[#262626] rounded-full cursor-pointer m-8"
            onClick={onClick}
        >
            <div className="flex items-center mx-auto text-white">
                <span className="text-l mr-1">➕</span>
                <span>New Note</span>
            </div>
        </div>
    );
};

export default NewNoteIcon;
