import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Sistema de Ventas",
            version: "1.0.0",
            description: "Documentación de la API del Sistema de Ventas"
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Servidor de desarrollo"
            }
        ]
    },
    apis: ["./src/routes/*.js"]
};

export const swaggerSpec = swaggerJSDoc(options);
