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
        <div>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default NoteForm;
