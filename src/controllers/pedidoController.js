import {
    obtenerPedidos,
    obtenerPedidoPorId,
    crearPedido,
    actualizarPedido,
    eliminarPedido
} from "../models/pedidoModel.js";

export const getPedidos = async (req, res) => {
    try {
        const pedidos = await obtenerPedidos();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener pedidos",
            error: error.message
        });
    }
};

export const getPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await obtenerPedidoPorId(id);

        if (!pedido) {
            return res.status(404).json({ mensaje: "Pedido no encontrado" });
        }

        res.json(pedido);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener pedido",
            error: error.message
        });
    }
};

export const postPedido = async (req, res) => {
    try {
        const pedido = await crearPedido(req.body);
        res.status(201).json(pedido);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear pedido",
            error: error.message
        });
    }
};

export const putPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await actualizarPedido(id, req.body);

        if (!pedido) {
            return res.status(404).json({ mensaje: "Pedido no encontrado" });
        }

        res.json(pedido);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar pedido",
            error: error.message
        });
    }
};

export const deletePedido = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await eliminarPedido(id);

        if (!pedido) {
            return res.status(404).json({ mensaje: "Pedido no encontrado" });
        }

        res.json({ mensaje: "Pedido eliminado correctamente", pedido });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar pedido",
            error: error.message
        });
    }
};