import express from "express";
import { balance, lastBlockChain} from "../controllers/authControllers.js";

const router = express.Router();

router.get('/lastBlockChain',lastBlockChain);
router.post('/balance',balance);

export default router;