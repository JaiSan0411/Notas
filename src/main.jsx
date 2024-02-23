import { createRoot } from 'react-dom';
import { StrictMode } from 'react';
import "./index.css";
// Componentes para las diferentes páginas
import { Router } from "./Router.jsx";


export const DeleteNote = () => <div>Delete Note</div>;

// eslint-disable-next-line react/no-deprecated
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>
);