// File: /backend/server.js
import express from 'express';
import elAgente from '../src/main.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// POST /api/chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { mensaje } = req.body;

    if (!mensaje) {
      return res.status(400).json({ error: 'El mensaje es requerido.' });
    }

    // Call elAgente.run with the received message
    const respuesta = await elAgente.run(mensaje);

    // Return the response in JSON format
    res.json({ respuesta });
  } catch (error) {
    console.error('Error en /api/chat:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

app.use(cors());

export default app;