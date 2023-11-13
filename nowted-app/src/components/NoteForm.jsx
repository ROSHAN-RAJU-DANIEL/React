import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import DateIcon from "../assets/DateIcon.svg"
import Bold from "../assets/Bold.svg"
import Italic from "../assets/Italic.svg"
import Underline from "../assets/Underline.svg"
import Attach from "../assets/Attach.svg"
import ImageIcon from "../assets/Image.svg"
import ArrowDown from "../assets/ArrowDown.svg"
import FavouritesIcon from "../assets/Favourite.svg";
import DeletedIcon from "../assets/Trash.svg";

const NoteForm = ({ onSave, onCancel, onDelete, onFavourite }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const initialNote = useSelector((state) => state.notes.selectedNoteItem);
    const folder = useSelector((state) => state.notes.selectedFolder);

    useEffect(() => {
        if (initialNote) {
            setTitle(initialNote.title);
            setContent(initialNote.content);
        } else {
            setTitle('');
            setContent('');
        }
    }, [initialNote]);

    useEffect(() => {
        const closeDropdown = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('click', closeDropdown);

        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);

    const handleSave = () => {
        if (title && content) {
            onSave({ title, content, folder, id: initialNote ? initialNote.id : null });
            setTitle('');
            setContent('');
            onCancel();
        }
    };

    const handleThreeDotsClick = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="w-full h-full mx-auto p-4 bg-[#0a0a0a]">
            <div className="mb-4 flex items-center">
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full p-2 bg-[#0a0a0a] text-white"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {initialNote && (
                    <div className="relative" ref={dropdownRef}>
                        <div className="ml-3 cursor-pointer" onClick={handleThreeDotsClick}>
                            <div className="bg-black border border-white text-white hover:bg-[#262626] font-semibold rounded-full p-2">
                                <div className="w-2 h-2  flex items-center justify-center"> <span>...</span></div>
                            </div>
                        </div>
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-40 bg-[#262626] shadow rounded-md z-10">
                                <ul className="py-1">
                                    <li
                                        onClick={() => {
                                            onDelete(initialNote.id);
                                            setShowDropdown(false);
                                        }}
                                        className="px-4 py-2 text-white cursor-pointer hover:bg-[#171717]"
                                    >
                                        <div className="flex items-center">
                                            <img src={DeletedIcon} alt="Deleted" className="w-4 h-4 mr-2" /> Delete
                                        </div>
                                    </li>
                                    <li
                                        onClick={() => {
                                            onFavourite(initialNote.id);
                                            setShowDropdown(false);
                                        }}
                                        className="px-4 py-2 text-white cursor-pointer hover:bg-[#171717]"
                                    >
                                        <div className="flex items-center">
                                            <img src={FavouritesIcon} alt="Favourites" className="w-4 h-4 mr-2" />
                                            {initialNote.favourite ? 'Remove from Favorite' : 'Add to Favorite'}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
            {initialNote && (
                <div className="mb-4 ml-2 flex items-center">
                    <span className="text-white text-sm mr-2">Date</span>
                    <img src={DateIcon} alt="Calendar Icon" className="w-4 h-4 mr-2" />
                    <span className="text-white text-sm ml-14">
                        {new Date(initialNote.updatedAt).toLocaleString()}
                    </span>
                </div>
            )}
            <hr className="mb-2 border-t border-[#4b5563]" />
            <div className="mb-2 flex items-center space-x-6">
                <span className="text-white text-sm ml-2 mr-8">Paragraph</span>
                <img src={ArrowDown} alt="ArrowDown" className="w-4 h-4" />
                <span className="text-white text-sm ml-2">16</span>
                <img src={ArrowDown} alt="ArrowDown" className="w-4 h-4" />
                <img src={Italic} alt="Italic" className="w-4 h-4" />
                <img src={Bold} alt="Bold" className="w-4 h-4" />
                <img src={Underline} alt="Underline" className="w-4 h-4" />
                <img src={ImageIcon} alt="ImageIcon" className="w-4 h-4" />
                <img src={Attach} alt="Attach" className="w-4 h-4 mr-4" />
            </div>
            <hr className="mb-4 border-t border-[#4b5563]" />
            <div className="mb-4">
                <textarea
                    placeholder="Content"
                    className="w-full h-[520px] p-2 rounded-md bg-[#0a0a0a] text-white"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className="flex justify-end">
                <span onClick={handleSave} className="text-gray-500 cursor-pointer mr-2">
                    Save
                </span>
                <span onClick={onCancel} className="text-gray-500 cursor-pointer">
                    Cancel
                </span>
            </div>
        </div>
    );
};

export default NoteForm;
