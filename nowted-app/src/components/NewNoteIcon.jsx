import React from 'react';
import PlusIcon from '../assets/PlusIcon.svg'

const NewNoteIcon = ({ onClick }) => {
    return (
        <div
            className="w-40 h-9 flex items-center ml-2 bg-[#262626] cursor-pointer p-2 transition-colors duration-300 hover:bg-[#737373]"
            onClick={onClick}
        >
            <div className="flex items-center mx-auto text-white font-source-sans-pro text-md font-bold">
                <img src={PlusIcon} alt="New Note" className="w-4 h-4 mr-1" />
                <span>New Note</span>
            </div>
        </div>
    );
};

export default NewNoteIcon;