# Entregable: Sistema de Gestión de Estudiantes con LLM Tools

Este proyecto es un entregable para implementar un sistema de gestión de estudiantes utilizando LLMs (Large Language Models) y Tools.

## 📚 Requisitos Previos

- Node.js >= 18
- [Ollama](https://ollama.com/) instalado y corriendo
- Modelo qwen3:4b instalado

## 🛠 Instalación Paso a Paso

### 1. Instalar Ollama

Descarga e instala Ollama desde su sitio oficial:

- [Descargar Ollama](https://ollama.com/download)

Sigue las instrucciones para tu sistema operativo (Windows, Mac o Linux).

### 2. Instalar el modelo necesario

Abre una terminal y ejecuta:

```bash
ollama pull qwen3:4b
```

Esto descargará el modelo requerido para el proyecto.

### 3. Instalar dependencias del proyecto

Desde la raíz del proyecto, instala las dependencias de backend y frontend:

```bash
npm i
cd frontend
npm i
cd ..
```

## 🚀 Cómo ejecutar el chat

### Comando para iniciar

En la terminal, desde la carpeta `raiz`:

```bash
npm run start
```

Esto levantará el servidor en http://localhost:3001


Esto abrirá la interfaz web en http://localhost:3000

¡Listo! Ya puedes interactuar con el chat para gestionar estudiantes.

## 📝 Notas

- No modifiques:
  - La estructura de los archivos
  - Los nombres de los métodos/Tools
  - Los parámetros definidos

## 📚 Recursos

- [Documentación de LlamaIndex](https://docs.llamaindex.ai/)
- [Documentación de Zod](https://zod.dev/)
- [Ejemplos de Tools](https://docs.llamaindex.ai/en/stable/examples/tools/)
