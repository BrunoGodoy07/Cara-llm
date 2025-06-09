import React from "react";

export default function StudentList({ estudiantes }) {
  if (!estudiantes.length) return <p>No hay estudiantes registrados.</p>;
  return (
    <ul>
      {estudiantes.map((est, i) => (
        <li key={i}>{est.nombre} {est.apellido} - {est.curso}</li>
      ))}
    </ul>
  );
}