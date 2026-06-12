import { pool } from "../config/database.js";

export const obtenerPedidos = async () => {

    const result = await pool.query(
        "SELECT * FROM pedidos ORDER BY id_pedido"
    );

    return result.rows;
};

export const obtenerPedidoPorId = async (id) => {

    const result = await pool.query(
        "SELECT * FROM pedidos WHERE id_pedido = $1",
        [id]
    );

    return result.rows[0];
};

export const crearPedido = async (pedido) => {

    const {
        id_usuario,
        total,
        estado = "Pendiente"
    } = pedido;

    const result = await pool.query(
        `
        INSERT INTO pedidos
        (
            id_usuario,
            total,
            estado
        )
        VALUES
        (
            $1,$2,$3
        )
        RETURNING *
        `,
        [
            id_usuario,
            total,
            estado
        ]
    );

    return result.rows[0];
};

export const actualizarPedido = async (id, pedido) => {

    const {
        id_usuario,
        total,
        estado
    } = pedido;

    const result = await pool.query(
        `
        UPDATE pedidos
        SET
            id_usuario = $1,
            total = $2,
            estado = $3
        WHERE id_pedido = $4
        RETURNING *
        `,
        [
            id_usuario,
            total,
            estado,
            id
        ]
    );

    return result.rows[0];
};

export const eliminarPedido = async (id) => {

    const result = await pool.query(
        `
        DELETE FROM pedidos
        WHERE id_pedido = $1
        RETURNING *
        `,
        [id]
    );

    return result.rows[0];
};