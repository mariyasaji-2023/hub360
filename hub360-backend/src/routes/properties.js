import { Router } from "express";
import {
  createProperty,
  deleteProperty,
  getProperty,
  listProperties,
} from "../controllers/propertiesController.js";
import { upload } from "../middleware/upload.js";

const router = Router();

router.get("/", listProperties);
router.get("/:id", getProperty);
router.post("/", upload.array("photos", 8), createProperty);
router.delete("/:id", deleteProperty);

export default router;
