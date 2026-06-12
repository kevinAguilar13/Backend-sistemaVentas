import {
    obtenerDetalles,
    obtenerDetallePorId,
    obtenerDetallesPorPedido,
    crearDetalle,
    actualizarDetalle,
    eliminarDetalle
} from "../models/detallePedidoModel.js";

export const getDetalles = async (req, res) => {
    try {
        const detalles = await obtenerDetalles();
        res.json(detalles);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener detalles de pedido",
            error: error.message
        });
    }
};

export const getDetalle = async (req, res) => {
    try {
        const { id } = req.params;
        const detalle = await obtenerDetallePorId(id);

        if (!detalle) {
            return res.status(404).json({ mensaje: "Detalle no encontrado" });
        }

        res.json(detalle);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener detalle",
            error: error.message
        });
    }
};

export const getDetallesPorPedido = async (req, res) => {
    try {
        const { id_pedido } = req.params;
        const detalles = await obtenerDetallesPorPedido(id_pedido);
        res.json(detalles);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener detalles del pedido",
            error: error.message
        });
    }
};

export const postDetalle = async (req, res) => {
    try {
        const detalle = await crearDetalle(req.body);
        res.status(201).json(detalle);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear detalle de pedido",
            error: error.message
        });
    }
};

export const putDetalle = async (req, res) => {
    try {
        const { id } = req.params;
        const detalle = await actualizarDetalle(id, req.body);

        if (!detalle) {
            return res.status(404).json({ mensaje: "Detalle no encontrado" });
        }

        res.json(detalle);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar detalle",
            error: error.message
        });
    }
};

export const deleteDetalle = async (req, res) => {
    try {
        const { id } = req.params;
        const detalle = await eliminarDetalle(id);

        if (!detalle) {
            return res.status(404).json({ mensaje: "Detalle no encontrado" });
        }

        res.json({ mensaje: "Detalle eliminado correctamente", detalle });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar detalle",
            error: error.message
        });
    }
};
