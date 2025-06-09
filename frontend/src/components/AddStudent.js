import React, { useState } from "react";

export default function AddStudent({ onAdd }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [curso, setCurso] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ nombre, apellido, curso });
    setNombre(""); setApellido(""); setCurso("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
      <input placeholder="Apellido" value={apellido} onChange={e => setApellido(e.target.value)} required />
      <input placeholder="Curso" value={curso} onChange={e => setCurso(e.target.value)} required />
      <button type="submit">Agregar</button>
    </form>
  );
}