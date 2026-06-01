import { Pool } from "pg";
import "dotenv/config";

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false,
    },
});

export async function conecctionDB() {
    try {
        const client = await pool.connect();

        console.log("Conexión exitosa a PostgreSQL");

        client.release();
    } catch (error) {
        console.error("Error al conectar a PostgreSQL:", error.message);
        throw error;
    }
}