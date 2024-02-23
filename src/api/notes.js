import instance from './';

async function getNotes() {
  try {
    const response = await instance.get('/notes');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function createNote(note) {
  try {
    const response = await instance.post('/notes', note);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function updateNote(noteId, updatedNote) {
  try {
    const response = await instance.put(`/notes/${noteId}`, updatedNote);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteNote(noteId) {
  try {
    const response = await instance.delete(`/notes/${noteId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function readOneNote(noteId) {
  try {
    const response = await instance.get(`/notes/${noteId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export default {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  readOneNote
};