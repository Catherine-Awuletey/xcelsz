import { CreateMeeting, DeleteMeeting, UpdateMeeting } from "../controllers/index.js";

import { Router } from "express";

const router = Router();


router.post("/", CreateMeeting)
router.put("/:meetingId",UpdateMeeting)
router.delete("/meetingId", DeleteMeeting)

export default router;