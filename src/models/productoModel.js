import { pool } from "../config/database.js";

export const obtenerProductos = async () => {
    const result = await pool.query(`
        SELECT *
        FROM productos
        ORDER BY id_producto
    `);

    return result.rows;
};

export const obtenerProductoPorId = async (id) => {
    const result = await pool.query(
        `SELECT * FROM productos
         WHERE id_producto = $1`,
        [id]
    );

    return result.rows[0];
};

export const crearProducto = async (producto) => {

    const {
        id_categoria,
        nombre,
        descripcion,
        sku,
        precio,
        stock
    } = producto;

    const result = await pool.query(
        `
        INSERT INTO productos
        (
            id_categoria,
            nombre,
            descripcion,
            sku,
            precio,
            stock
        )
        VALUES
        (
            $1,$2,$3,$4,$5,$6
        )
        RETURNING *
        `,
        [
            id_categoria,
            nombre,
            descripcion,
            sku,
            precio,
            stock
        ]
    );

    return result.rows[0];
};

export const actualizarProducto = async (id, producto) => {

    const {
        id_categoria,
        nombre,
        descripcion,
        sku,
        precio,
        stock
    } = producto;

    const result = await pool.query(
        `
        UPDATE productos
        SET
            id_categoria = $1,
            nombre = $2,
            descripcion = $3,
            sku = $4,
            precio = $5,
            stock = $6
        WHERE id_producto = $7
        RETURNING *
        `,
        [
            id_categoria,
            nombre,
            descripcion,
            sku,
            precio,
            stock,
            id
        ]
    );

    return result.rows[0];
};

export const eliminarProducto = async (id) => {

    const result = await pool.query(
        `
        DELETE FROM productos
        WHERE id_producto = $1
        RETURNING *
        `,
        [id]
    );

    return result.rows[0];
};