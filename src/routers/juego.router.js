import { Router } from "express";
import { listarJuegos, RegistrarJuego, EliminarJuego, ActualizarJuego} from "../controllers/juego.controller.js";

const router = Router();

router.get('/listar',listarJuegos);
router.post('/registrar',RegistrarJuego);
router.delete('/eliminar/:id',EliminarJuego);
router.put('/actualizar/:id',ActualizarJuego);


export default router;