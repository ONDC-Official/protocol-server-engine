const router = require("express").Router();
const {
  becknToBusiness,
  businessToBecknWrapper,
  updateSession,
} = require("../controller/index");
const {healthCheckAPI} = require("../controller/health.controller")

// buss > beckn
router.post("/createPayload", businessToBecknWrapper);

// bkn > buss
router.post("/ondc/:method", becknToBusiness);

router.post("/updateSession", updateSession);

router.get("/health", healthCheckAPI);

// self health check route
router.get("/health-self", (req, res) => {
  res.status(200).send(`STATUS:UP,TIMESTAMP:${new Date().toISOString()}`);
});

module.exports = router;
