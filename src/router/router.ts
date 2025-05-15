import express from "express";
import { Request, Response } from "express";

export const router = express.Router();
import { healthCheckAPI } from "../controller/health.controller";
import {
  becknToBusiness,
  businessToBecknWrapper,
  updateSession,
  getsession,
} from "../controller/index";
const logger = require("../utils/logger").init();

// buss > beckn
router.post("/createPayload", businessToBecknWrapper);

// bkn > buss
router.post("/ondc/:method", becknToBusiness);

router.post("/updateSession", updateSession);

// route for check halth of the service
router.get("/health", healthCheckAPI);

// self health check route
router.get("/health-self", (req: Request, res: Response) => {
  res.status(200).send(`STATUS:UP,TIMESTAMP:${new Date().toISOString()}`);
});

router.get("/session", getsession);
