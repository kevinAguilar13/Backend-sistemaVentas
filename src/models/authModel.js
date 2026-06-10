import { pool } from "../config/database.js";

export const loginUsuario = async (email) => {

    const result = await pool.query(
        `
        SELECT *
        FROM usuarios
        WHERE email = $1
        `,
        [email]
    );

    return result.rows[0];
};