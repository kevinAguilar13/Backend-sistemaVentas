import { Router } from "express";
import * as usuarioController from "../controllers/usuarioController.js";
import { verificarToken } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", verificarToken, usuarioController.getUsuarios);
router.get("/:id", verificarToken, usuarioController.getUsuario);
router.post("/", verificarToken, usuarioController.postUsuario);
router.put("/:id", verificarToken, usuarioController.putUsuario);
router.delete("/:id", verificarToken, usuarioController.deleteUsuario);

export default router;