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
        id_direccion,
        subtotal,
        impuesto,
        envio,
        total,
        estado
    } = pedido;

    const result = await pool.query(
        `
        INSERT INTO pedidos
        (
            id_usuario,
            id_direccion,
            subtotal,
            impuesto,
            envio,
            total,
            estado
        )
        VALUES
        (
            $1,$2,$3,$4,$5,$6,$7
        )
        RETURNING *
        `,
        [
            id_usuario,
            id_direccion,
            subtotal,
            impuesto,
            envio,
            total,
            estado
        ]
    );

    return result.rows[0];
};

export const actualizarPedido = async (id, pedido) => {

    const {
        id_usuario,
        id_direccion,
        subtotal,
        impuesto,
        envio,
        total,
        estado
    } = pedido;

    const result = await pool.query(
        `
        UPDATE pedidos
        SET
            id_usuario = $1,
            id_direccion = $2,
            subtotal = $3,
            impuesto = $4,
            envio = $5,
            total = $6,
            estado = $7
        WHERE id_pedido = $8
        RETURNING *
        `,
        [
            id_usuario,
            id_direccion,
            subtotal,
            impuesto,
            envio,
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