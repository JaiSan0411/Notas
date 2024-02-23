import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, TextField, Button } from '@mui/material';
import http_notes from '../api/notes';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function EditNote() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNotes] = useState({
        title: '',
        content: ''
    });

  useEffect(() => {
    async function fetchNotes() {
      try {
        const data = await http_notes.readOneNote();
        setNotes({
            title: data.title,
            content: data.content
        });
      } catch (error) {
        console.error(error);
      }
    }

    fetchNotes();
  }, [id]);

  async function updateNote(event) {
    event.preventDefault();
    try {
        await http_notes.updateNote(id, note);
        Swal.fire({
            icon: 'success',
            title: 'Nota actualizada exitosamente',
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(() => {
            navigate('/');
        }, 1500);
    } catch (error) {
        console.error(error);
    }
}
    function handleInputChange(event) {
        setNotes({
            ...note,
            [event.target.name]: event.target.value
        });
    }

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Editar Nota
      </Typography>
      <div className="flex-card">
        {notes.map((note) => (
          <Card key={note.id} style={{ margin: '16px' }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {note.title}
              </Typography>
              <Typography color="textSecondary">
                {parseDate(note.date)}
              </Typography>
              <Typography variant="body2" component="p">
                {note.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <form onSubmit={createNote}>
        <TextField
          label="Título"
          name="title"
          value={newNote.title}
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
          style={{background:"rgba(255,255,255,0.5)"}}
        />
        <TextField
          style={{background:"rgba(255,255,255,0.5)"}}
          label="Contenido"
          name="content"
          value={newNote.content}
          onChange={handleInputChange}
          multiline
          fullWidth
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Actualizar Nota
        </Button>
      </form>
    </div>
  );
}

export default EditNote;