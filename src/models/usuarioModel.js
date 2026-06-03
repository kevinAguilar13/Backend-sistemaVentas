import { pool } from "../config/database.js";

export const obtenerUsuarios = async () => {
    const result = await pool.query(
        "SELECT * FROM usuarios ORDER BY id_usuario"
    );

    return result.rows;
};

export const obtenerUsuarioPorId = async (id) => {
    const result = await pool.query(
        "SELECT * FROM usuarios WHERE id_usuario = $1",
        [id]
    );

    return result.rows[0];
};

export const crearUsuario = async (usuario) => {

    const {
        id_rol,
        nombre,
        apellido,
        email,
        password
    } = usuario;

    const result = await pool.query(
        `
        INSERT INTO usuarios
        (
            id_rol,
            nombre,
            apellido,
            email,
            password
        )
        VALUES
        (
            $1,$2,$3,$4,$5
        )
        RETURNING *
        `,
        [
            id_rol,
            nombre,
            apellido,
            email,
            password
        ]
    );

    return result.rows[0];
};

export const actualizarUsuario = async (id, usuario) => {

    const {
        id_rol,
        nombre,
        apellido,
        email,
        password
    } = usuario;

    const result = await pool.query(
        `
        UPDATE usuarios
        SET
            id_rol = $1,
            nombre = $2,
            apellido = $3,
            email = $4,
            password = $5
        WHERE id_usuario = $6
        RETURNING *
        `,
        [
            id_rol,
            nombre,
            apellido,
            email,
            password,
            id
        ]
    );

    return result.rows[0];
};

export const eliminarUsuario = async (id) => {

    const result = await pool.query(
        `
        DELETE FROM usuarios
        WHERE id_usuario = $1
        RETURNING *
        `,
        [id]
    );

    return result.rows[0];
};