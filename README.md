# Entregable: Sistema de Gestión de Estudiantes con LLM Tools

Este proyecto es un entregable para implementar un sistema de gestión de estudiantes utilizando LLMs (Large Language Models) y Tools.

## 📚 Requisitos Previos

- Node.js >= 18
- [Ollama](https://ollama.com/) instalado y corriendo
- Modelo qwen3:1.7b instalado

## 🛠 Instalación Paso a Paso

### 1. Instalar Ollama

Descarga e instala Ollama desde su sitio oficial:

- [Descargar Ollama](https://ollama.com/download)

Sigue las instrucciones para tu sistema operativo (Windows, Mac o Linux).

### 2. Instalar el modelo necesario

Abre una terminal y ejecuta:

```bash
ollama pull qwen3:1.7b
```

Esto descargará el modelo requerido para el proyecto.

### 3. Instalar dependencias del proyecto

Desde la raíz del proyecto, instala las dependencias de backend y frontend:

```bash
cd backend
npm install
cd ../frontend
npm install
cd ..
```

## 🚀 Cómo ejecutar el chat

### 1. Iniciar Ollama

En una terminal, ejecuta:

```bash
ollama run qwen3:1.7b
```

Deja esta terminal abierta mientras usas el sistema.

### 2. Iniciar el backend

En otra terminal, desde la carpeta `backend`:

```bash
npm start
```

Esto levantará el servidor en http://localhost:3001

### 3. Iniciar el frontend

En otra terminal, desde la carpeta `frontend`:

```bash
npm start
```

Esto abrirá la interfaz web en http://localhost:3000

¡Listo! Ya puedes interactuar con el chat para gestionar estudiantes.

## 🎯 Tu Tarea

Debes implementar las siguientes funcionalidades:

1. En `src/lib/estudiantes.js`:
   - Método `agregarEstudiante(nombre, apellido, curso)`
   - Método `buscarEstudiantePorNombre(nombre)`
   - Método `buscarEstudiantePorApellido(apellido)`
   - Método `listarEstudiantes()`

2. En `src/ejemplo-alumnos-tools.js`:
   - Tool `buscarPorNombre`
   - Tool `buscarPorApellido`
   - Tool `agregarEstudiante`
   - Tool `listarEstudiantes`

## 💡 Ayuda

- Cada método y Tool tiene comentarios TODO indicando dónde implementar el código
- Revisa la documentación de llamaindex para entender cómo funcionan las Tools
- Utiliza la clase `Estudiantes` para manejar los datos
- Las Tools deben usar los métodos de la clase `Estudiantes`

## 📝 Notas

- El código base ya incluye:
  - Interfaz CLI funcional
  - Formateo de respuestas
  - Manejo básico de archivos
  - Estructura del proyecto

- No modifiques:
  - La estructura de los archivos
  - Los nombres de los métodos/Tools
  - Los parámetros definidos

## 📚 Recursos

- [Documentación de LlamaIndex](https://docs.llamaindex.ai/)
- [Documentación de Zod](https://zod.dev/)
- [Ejemplos de Tools](https://docs.llamaindex.ai/en/stable/examples/tools/)
