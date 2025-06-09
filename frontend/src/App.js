import React, { useEffect, useState } from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import SearchStudent from "./components/SearchStudent";
import { listarEstudiantes, agregarEstudiante, buscarPorNombre, buscarPorApellido } from "./api";

function App() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [error, setError] = useState("");

  const cargarEstudiantes = () =>
    listarEstudiantes()
      .then(res => setEstudiantes(res.data))
      .catch(() => setError("Error al cargar estudiantes"));

  useEffect(() => { cargarEstudiantes(); }, []);

  const handleAdd = (data) =>
    agregarEstudiante(data)
      .then(() => cargarEstudiantes())
      .catch(() => setError("Error al agregar estudiante"));

  const handleSearch = (tipo, valor) => {
    const fn = tipo === "nombre" ? buscarPorNombre : buscarPorApellido;
    fn(valor)
      .then(res => setEstudiantes(res.data))
      .catch(() => setError("Error en la búsqueda"));
  };

  return (
    <div style={{maxWidth: 600, margin: "auto"}}>
      <h1>Gestión de Estudiantes</h1>
      {error && <p style={{color: "red"}}>{error}</p>}
      <AddStudent onAdd={handleAdd} />
      <SearchStudent onSearch={handleSearch} />
      <button onClick={cargarEstudiantes}>Listar todos</button>
      <StudentList estudiantes={estudiantes} />
    </div>
  );
}

export default App;