import { Typography, Card, CardContent, TextField, Button } from '@mui/material';
import http_notes from '../api/notes';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function UpdateNote() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const [existingNote, setExistingNote] = useState({
        title: '',
        content: ''
    });

  useEffect(() => {
    async function fetchNotes() {
      try {
        const data = await http_notes.readOneNote(id);
        setExistingNote({
            title: data.title,
            content: data.content
        });
      } catch (error) {
        console.error(error);
      }
    }

    fetchNotes();
  }, []);

  function parseDate(originalDate) {
    const parts = originalDate.split(' ');
    const datePart = parts[0];
    const [year, month, day] = datePart.split('-');
    const transformedDate = `${day}/${month}/${year.slice(-2)}`;
    return transformedDate;
  }

  async function updateNote(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    try {
      await http_notes.updateNote(id, existingNote);
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
    setExistingNote({
        ...existingNote,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Actualizar Nota
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
      <form onSubmit={updateNote}>
        <TextField
          label="Título"
          name="title"
          value={existingNote.title}
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
          value={existingNote.content}
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

export default UpdateNote;