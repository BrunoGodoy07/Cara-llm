// File: /backend/server.js
import express from 'express';
import elAgente from '../src/main.js';
import cors from 'cors';

app.use(cors({ origin: 'http://localhost:3000' }));
const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());

// POST /api/chat endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }
  // Simulate bot reply
  res.json({ reply: `Bot received: ${message}` });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


export default app;