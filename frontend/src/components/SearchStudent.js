import React, { useState } from "react";

export default function SearchStudent({ onSearch }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("nombre");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(type, query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="nombre">Nombre</option>
        <option value="apellido">Apellido</option>
      </select>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar..." required />
      <button type="submit">Buscar</button>
    </form>
  );
}