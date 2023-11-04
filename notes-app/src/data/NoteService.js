const mockNotes = [];

let nextNoteId = 1;

export const createNote = (note) => {
    const newNote = { id: nextNoteId, title: note.title, content: note.content };
    mockNotes.push(newNote);
    nextNoteId++;
};

export const getNotes = () => {
    return mockNotes;
};

export const updateNote = (updatedNote) => {
    const index = mockNotes.findIndex((note) => note.id === updatedNote.id);
    if (index !== -1) {
        mockNotes[index] = { ...updatedNote };
    }
};
