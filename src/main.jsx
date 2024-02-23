import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./index.css";
import logo from "./assets/logo.png";
import { useParams } from 'react-router-dom';
// Componentes para las diferentes páginas
import Homepage from './page/Homepage.jsx';
import AddNote from './page/AddNote.jsx';
import EditNote from './page/EditNote.jsx';
import UpdateNote from './page/UpdateNote.jsx';


const DeleteNote = () => <div>Delete Note</div>;

// Enrutador
const Router = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
       <main className="container-flex">
        <article className="card-homepage">
          <Link to="/">
                      <img src={logo} alt="logo" className="logo-icon" />
                      <br />
                      Home page
                    </Link>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/add-note" element={<AddNote />} />
              <Route path="/edit-note/:id" element={<EditNote />} />
              <Route path="/update-note/:id" element={<UpdateNote />} />
              <Route path="/delete-note" element={<DeleteNote />} />
            </Routes>
        </article>
       </main>
       

        <Link to="/add-note">
          <Fab
            color="#00FF00"
            aria-label="add"
            style={{
              position: "fixed",
              bottom: "16px",
              right: "16px",
            }}
          >
            <AddIcon />
          </Fab>
        </Link>
      </BrowserRouter>
    </ThemeProvider>
  );
};

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);