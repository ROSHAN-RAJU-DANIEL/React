import React, { useState, useEffect } from 'react';

const NoteForm = ({ onSave, onCancel, initialNote }) => {
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

    return (
        <div className="w-full h-full mx-auto p-4  shadow bg-black">
            <h2 className="text-2xl font-semibold mb-4">Note Editor</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full p-2  rounded-md bg-[#0a0a0a] text-white"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <textarea
                    placeholder="Content"
                    className="w-full h-[540px] p-2  rounded-md bg-[#0a0a0a] text-white"
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
