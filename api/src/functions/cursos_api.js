const { app } = require("@azure/functions");

app.http("cursos", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    return { body: JSON.stringify(cursosData) };
  },
});

const cursosData = [
  {
    nombre: "Introducción a React Hooks",
    docente: "María López",
    duracion: "10 horas",
    tema: "Frontend",
  },
  {
    nombre: "API REST con Node.js y Express",
    docente: "Juan Pérez",
    duracion: "15 horas",
    tema: "Backend",
  },
  {
    nombre: "Despliegue Serverless en Azure",
    docente: "Carlos Ruiz",
    duracion: "8 horas",
    tema: "DevOps",
  },
  {
    nombre: "Fundamentos de CSS Moderno",
    docente: "Ana Gómez",
    duracion: "5 horas",
    tema: "Diseño",
  },
];
