import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import DateIcon from "../assets/DateIcon.svg"
import FavouritesIcon from "../assets/Favourite.svg";
import DeletedIcon from "../assets/Trash.svg";
import Folder from "../assets/Folder.svg"
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const NoteForm = ({ onSave, onCancel, onDelete, onFavourite }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [folder, setFolder] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const initialNote = useSelector((state) => state.notes.selectedNoteItem);
    const selectedFolder = useSelector((state) => state.notes.selectedFolder);

    useEffect(() => {
        if (initialNote) {
            setTitle(initialNote.title);
            setContent(initialNote.content);
            setFolder(initialNote.folder);
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
            onSave({
                title,
                content,
                folder: initialNote ? initialNote.folder : selectedFolder,
                id: initialNote ? initialNote.id : null,
            });
            setTitle('');
            setContent('');
            onCancel();
        }
    };

    const handleThreeDotsClick = () => {
        setShowDropdown(!showDropdown);
    };

    const renderDateAndFolder = () => {
        const dateToDisplay = initialNote ? new Date(initialNote.updatedAt).toLocaleDateString() : new Date().toLocaleDateString();
        const folderToDisplay = initialNote ? initialNote.folder : selectedFolder;

        return (
            <>
                <div className="mb-4 ml-2 flex items-center">
                    <span className="text-white text-sm mr-2">Date</span>
                    <img src={DateIcon} alt="Calendar Icon" className="w-4 h-4 mr-2" />
                    <span className="text-white text-sm ml-14">{dateToDisplay}</span>
                </div>
                <hr className="mb-2 border-t border-white" />
                <div className="mb-4 ml-2 flex items-center">
                    <span className="text-white text-sm mr-2">Folder</span>
                    <img src={Folder} alt="Folder Icon" className="w-4 h-4 mr-2" />
                    <span className="text-white text-sm ml-14">{folderToDisplay}</span>
                </div>
            </>
        );
    };

    return (
        <div className="w-full h-full mx-auto p-4 bg-[#0a0a0a] relative">
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
            {renderDateAndFolder()}
            <div>
                <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={(value, delta, source, editor) => {
                        setContent(value);
                    }}
                    placeholder="Write your content here..."
                    modules={{
                        toolbar: [
                            [{ 'header': [1, 2, false] }],
                            ['bold', 'italic', 'underline'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                            ['link', 'image', 'video']
                        ],
                    }}
                    className="text-white h-[480px]"
                />
            </div>
            <div className="absolute bottom-4 right-4">
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
