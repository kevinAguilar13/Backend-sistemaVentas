import { pool } from "../config/database.js";

export const obtenerDetalles = async () => {

    const result = await pool.query(
        "SELECT * FROM detalle_pedido ORDER BY id_detalle"
    );

    return result.rows;
};

export const obtenerDetallePorId = async (id) => {

    const result = await pool.query(
        "SELECT * FROM detalle_pedido WHERE id_detalle = $1",
        [id]
    );

    return result.rows[0];
};

export const obtenerDetallesPorPedido = async (id_pedido) => {

    const result = await pool.query(
        `
        SELECT
            dp.*,
            p.nombre AS nombre_producto,
            p.imagen
        FROM detalle_pedido dp
        JOIN productos p ON dp.id_producto = p.id_producto
        WHERE dp.id_pedido = $1
        ORDER BY dp.id_detalle
        `,
        [id_pedido]
    );

    return result.rows;
};

export const crearDetalle = async (detalle) => {

    const {
        id_pedido,
        id_producto,
        cantidad,
        precio_unitario
    } = detalle;

    const result = await pool.query(
        `
        INSERT INTO detalle_pedido
        (
            id_pedido,
            id_producto,
            cantidad,
            precio_unitario
        )
        VALUES
        (
            $1,$2,$3,$4
        )
        RETURNING *
        `,
        [
            id_pedido,
            id_producto,
            cantidad,
            precio_unitario
        ]
    );

    return result.rows[0];
};

export const actualizarDetalle = async (id, detalle) => {

    const {
        id_pedido,
        id_producto,
        cantidad,
        precio_unitario
    } = detalle;

    const result = await pool.query(
        `
        UPDATE detalle_pedido
        SET
            id_pedido = $1,
            id_producto = $2,
            cantidad = $3,
            precio_unitario = $4
        WHERE id_detalle = $5
        RETURNING *
        `,
        [
            id_pedido,
            id_producto,
            cantidad,
            precio_unitario,
            id
        ]
    );

    return result.rows[0];
};

export const eliminarDetalle = async (id) => {

    const result = await pool.query(
        `
        DELETE FROM detalle_pedido
        WHERE id_detalle = $1
        RETURNING *
        `,
        [id]
    );

    return result.rows[0];
};
