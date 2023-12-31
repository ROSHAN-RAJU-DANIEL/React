import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const createNote = async (note) => {
    try {
        const response = await axios.post(`${API_URL}/notes`, note);
        return response.data;
    } catch (error) {
        console.error('Error creating note:', error);
        throw error;
    }
};

export const getNotes = async () => {
    try {
        const response = await axios.get(`${API_URL}/notes/undeleted`);
        return response.data;
    } catch (error) {
        console.error('Error getting notes:', error);
        throw error;
    }
};

export const updateNote = async (updatedNote) => {
    try {
        const response = await axios.put(`${API_URL}/notes/${updatedNote.id}`, updatedNote);
        return response.data;
    } catch (error) {
        console.error('Error updating note:', error);
        throw error;
    }
};

export const deleteNote = async (noteId) => {
    try {
        const response = await axios.delete(`${API_URL}/notes/toggleSoftDelete/${noteId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting note:', error);
        throw error;
    }
};

export const toggleFavourite = async (noteId) => {
    try {
        const response = await axios.put(`${API_URL}/notes/toggleFavorite/${noteId}`);
        return response.data;
    } catch (error) {
        console.error('Error toggleFavorite note:', error);
        throw error;
    }
};

export const getFavoriteNotes = async (title) => {
    try {
        const response = await axios.get(`${API_URL}/notes/favorites?title=${title}`);
        return response.data;
    } catch (error) {
        console.error('Error getting notes:', error);
        throw error;
    }
};

export const getDeletedNotes = async (title) => {
    try {
        const response = await axios.get(`${API_URL}/notes/deleted?title=${title}`);
        return response.data;
    } catch (error) {
        console.error('Error getting notes:', error);
        throw error;
    }
};

export const getFolderNotes = async (folder, title) => {
    try {
        const response = await axios.get(`${API_URL}/notes/byFolder/${folder}?title=${title}`);
        return response.data;
    } catch (error) {
        console.error('Error getting notes:', error);
        throw error;
    }
};
