import { Router } from "express";

import {
    getPedidos,
    getPedido,
    postPedido,
    putPedido,
    deletePedido
} from "../controllers/pedidoController.js";

const router = Router();

router.get("/", getPedidos);

router.get("/:id", getPedido);

router.post("/", postPedido);

router.put("/:id", putPedido);

router.delete("/:id", deletePedido);

export default router;