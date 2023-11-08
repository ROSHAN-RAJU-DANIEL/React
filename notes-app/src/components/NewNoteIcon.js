import React from 'react';
import PlusIcon from '../assets/PlusIcon.svg'

const NewNoteIcon = ({ onClick }) => {
    return (
        <div
            className="w-[260px] h-[40px] flex items-center bg-[#262626] rounded-lg cursor-pointer m-10 p-2"
            onClick={onClick}
        >
            <div className="flex items-center mx-auto text-white font-source-sans-pro">
                <img src={PlusIcon} alt="New Note" className="w-6 h-6 mr-1" />
                <span>New Note</span>
            </div>
        </div>
    );
};

export default NewNoteIcon;