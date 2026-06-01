import {
    obtenerClientes,
    crearCliente
} from "../models/clienteModel.js";

export const listarClientes = async (req, res) => {
    try {
        const clientes = await obtenerClientes();

        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
};

export const guardarCliente = async (req, res) => {
    try {
        const cliente = await crearCliente(req.body);

        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
};