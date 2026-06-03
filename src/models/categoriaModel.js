import { pool } from "../config/database.js";

export const obtenerCategorias = async () => {
    const result = await pool.query(
        "SELECT * FROM categorias ORDER BY id_categoria"
    );

    return result.rows;
};

export const obtenerCategoriaPorId = async (id) => {
    const result = await pool.query(
        "SELECT * FROM categorias WHERE id_categoria = $1",
        [id]
    );

    return result.rows[0];
};

export const crearCategoria = async (categoria) => {

    const {
        nombre,
        descripcion,
        estado
    } = categoria;

    const result = await pool.query(
        `
        INSERT INTO categorias
        (
            nombre,
            descripcion,
            estado
        )
        VALUES
        (
            $1,$2,$3
        )
        RETURNING *
        `,
        [
            nombre,
            descripcion,
            estado
        ]
    );

    return result.rows[0];
};

export const actualizarCategoria = async (id, categoria) => {

    const {
        nombre,
        descripcion,
        estado
    } = categoria;

    const result = await pool.query(
        `
        UPDATE categorias
        SET
            nombre = $1,
            descripcion = $2,
            estado = $3
        WHERE id_categoria = $4
        RETURNING *
        `,
        [
            nombre,
            descripcion,
            estado,
            id
        ]
    );

    return result.rows[0];
};

export const eliminarCategoria = async (id) => {

    const result = await pool.query(
        `
        DELETE FROM categorias
        WHERE id_categoria = $1
        RETURNING *
        `,
        [id]
    );

    return result.rows[0];
};