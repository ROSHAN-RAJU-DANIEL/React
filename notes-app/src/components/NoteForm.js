import React, { useState, useEffect } from 'react';
import DateIcon from "../assets/DateIcon.svg"
import Bold from "../assets/Bold.svg"
import Italic from "../assets/Italic.svg"
import Underline from "../assets/Underline.svg"
import Attach from "../assets/Attach.svg"
import ImageIcon from "../assets/Image.svg"
import ArrowDown from "../assets/ArrowDown.svg"

const NoteForm = ({ onSave, onCancel, initialNote, onDelete }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (initialNote) {
            setTitle(initialNote.title);
            setContent(initialNote.content);
        }
    }, [initialNote]);

    const handleSave = () => {
        if (title && content) {
            onSave({ title, content, id: initialNote ? initialNote.id : null });
            setTitle('');
            setContent('');
            onCancel();
        }
    };

    const handleDelete = () => {
        if (initialNote) {
            onDelete(initialNote.id);
        }
    };

    return (
        <div className="w-full h-full mx-auto p-4 shadow bg-[#0a0a0a">
            <div className="mb-4 flex items-center">
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full p-2 rounded-md bg-[#0a0a0a] text-white"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {initialNote && (
                    <button onClick={handleDelete} className="ml-3 bg-black text-white hover:bg-red-600 font-semibold rounded-full">
                        🗑️
                    </button>
                )}
            </div>
            {initialNote && (
                <div className="mb-4 ml-2 flex items-center">
                    <span className="text-white text-sm mr-2">Date</span>
                    <img src={DateIcon} alt="Calendar Icon" className="w-4 h-4 mr-2" />
                    <span className="text-white text-sm">
                        {new Date(initialNote.updatedAt).toLocaleString()}
                    </span>
                </div>
            )}
            <hr className="mb-2 border-t border-[#4b5563]" />
            <div className="mb-2 flex items-center space-x-6">
                <span className="text-white text-sm ml-2 mr-8">Paragraph</span>
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
                    className="w-full h-[500px] p-2 rounded-md bg-[#0a0a0a] text-white"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className="flex justify-end">
                <span
                    onClick={handleSave}
                    className="text-gray-500 cursor-pointer mr-2"
                >
                    Save
                </span>
                <span
                    onClick={onCancel}
                    className="text-gray-500 cursor-pointer"
                >
                    Cancel
                </span>
            </div>
        </div>
    );
};

export default NoteForm;
