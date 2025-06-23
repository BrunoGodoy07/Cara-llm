import express from 'express';
import cors from 'cors';
const app = express(); // <-- Define app FIRST

app.use(cors({ origin: 'http://localhost:3000' })); // <-- Then use cors
app.use(express.json());

app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }
  // Simulate bot reply
  res.json({ reply: `Bot received: ${message}` });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});

export default app;