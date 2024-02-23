import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import logo from "./assets/logo.png";
import Homepage from './page/Homepage.jsx';
import AddNote from './page/AddNote.jsx';
import EditNote from './page/EditNote.jsx';
import UpdateNote from './page/UpdateNote.jsx';
import { DeleteNote } from "./main.jsx";

// Enrutador
export const Router = () => {
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
