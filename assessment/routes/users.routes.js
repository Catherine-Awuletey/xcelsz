import { GetUserAvailableSlots } from "../controllers/index.js";
import { Router } from "express";

const router = Router();

router.get("/:userId/available-slots", GetUserAvailableSlots)


export default router;