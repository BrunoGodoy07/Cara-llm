import express from 'express';
import cors from 'cors';
import { tool, agent } from "llamaindex";
import { Ollama } from "@llamaindex/ollama";
import { z } from "zod";
import { Estudiantes } from "../src/lib/estudiantes.js"; // Adjust path if needed

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// --- AGENT/TOOLS/LLM SETUP (from your CLI chat) ---
const estudiantes = new Estudiantes();

const systemPrompt = `
Sos un asistente para gestionar estudiantes.
Tu tarea es ayudar a consultar o modificar una base de datos de alumnos.
Usá las herramientas disponibles para:
- Buscar estudiantes por nombre o apellido
- Agregar nuevos estudiantes
- Mostrar la lista completa de estudiantes
Respondé de forma clara y breve.
Si hay registros duplicados, eliminalos.
`.trim();

const ollamaLLM = new Ollama({
    model: "qwen3:1.7b",
    temperature: 0.75,
    timeout: 2 * 60 * 1000,
});

// Tools (copy them from src/main.js)
const buscarPorNombreTool = tool({
    name: "buscarPorNombre",
    description: "Busca estudiantes por nombre",
    parameters: z.object({
        nombre: z.string().describe("El nombre del estudiante"),
    }),
    execute: ({ nombre }) => estudiantes.buscarEstudiantePorNombre(nombre),
});

const buscarPorApellidoTool = tool({
    name: "buscarPorApellido",
    description: "Busca estudiantes por apellido",
    parameters: z.object({
        apellido: z.string().describe("El apellido del estudiante"),
    }),
    execute: ({ apellido }) => estudiantes.buscarEstudiantePorApellido(apellido),
});

const agregarEstudianteTool = tool({
    name: "agregarEstudiante",
    description: "Agrega un estudiante a la base",
    parameters: z.object({
        nombre: z.string().describe("El nombre del estudiante"),
        apellido: z.string().describe("El apellido del estudiante"),
        curso: z.string().describe("El curso del estudiante"),
    }),
    execute: ({ nombre, apellido, curso }) => {
        estudiantes.agregarEstudiante(nombre, apellido, curso);
        return "Estudiante agregado correctamente: " + JSON.stringify({ nombre, apellido, curso });
    },
});

const listarEstudiantesTool = tool({
    name: "listarEstudiantes",
    description: "Lista todos los estudiantes",
    parameters: z.object({}),
    execute: () => estudiantes.listarEstudiantes(),
});

const agente = agent({
    tools: [buscarPorNombreTool, buscarPorApellidoTool, agregarEstudianteTool, listarEstudiantesTool],
    llm: ollamaLLM,
    verbose: false,
    systemPrompt,
});

// --- API CHAT ROUTE ---
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'No message provided' });

  try {
    const respuesta = await agente.run(message);
    res.json({ reply: typeof respuesta === "string" ? respuesta : JSON.stringify(respuesta.data.result) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error procesando el mensaje' });
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});