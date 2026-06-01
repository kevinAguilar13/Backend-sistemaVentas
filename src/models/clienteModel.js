import { pool } from "../config/database.js";

export const obtenerClientes = async () => {
    const result = await pool.query(
        "SELECT * FROM clientes ORDER BY id"
    );

    return result.rows;
};

export const crearCliente = async (cliente) => {
    const {
        tipo_documento,
        numero_documento,
        nombres,
        apellidos,
        telefono,
        email,
        direccion
    } = cliente;

    const result = await pool.query(
        `INSERT INTO clientes
        (
            tipo_documento,
            numero_documento,
            nombres,
            apellidos,
            telefono,
            email,
            direccion
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7)
        RETURNING *`,
        [
            tipo_documento,
            numero_documento,
            nombres,
            apellidos,
            telefono,
            email,
            direccion
        ]
    );

    return result.rows[0];
};