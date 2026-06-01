import { Router } from "express";

import {
    listarClientes,
    guardarCliente
} from "../controllers/clienteController.js";

const router = Router();

router.get("/", listarClientes);
router.post("/", guardarCliente);

export default router;