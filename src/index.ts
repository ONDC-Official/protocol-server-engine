require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import { router } from "./router/router";
const app = express();
import connectDB from "./core/db";
const fs = require("fs")


import { configLoader } from "./core/loadConfig";
import { parseBoolean } from "./utils/utils";

// import { contextValidation } from "./core/contextValidation";
// import PayloadModule from "./core/payloadModule";
// import ondc from "ondc-payload-module";

const logger = require("./utils/logger").init();

const USE_DB = parseBoolean(process.env.USE_DB);
const PORT = process.env.PORT;
app.use(bodyParser.json({ limit: "10mb" }));
app.use(express.json());

configLoader
  .init()
  .then((data: any) => {
    logger.info(`Config loaded successfully.....`, { uuid: "asdad" });

    if (USE_DB) {
      connectDB();
    }

    // dump requests payloads
    if(process.env.DUMP_REQUESTS_PAYLOADS === "true"){
      logger.info("Dumping requests payloads to file");
      app.use((req, res, next) => {
        try{
        const folderPath = "./request_dump"
        if(!fs.existsSync(folderPath)){
          fs.mkdirSync(folderPath);
        }
        const action = req?.body?.context?.action || req?.body?.config || "undefined"
        const counter = (fs.readdirSync(folderPath).length||0)+1;
        const fileName = `${folderPath}/${counter}_${action}.json`;
        const fileContent = JSON.stringify(req.body, null, 2);
        fs.writeFileSync(fileName, fileContent);
        logger.info(`Request saved to ${fileName}`);
        next();
      }
      catch(err){
        logger.error("Error saving request to file:", err);
        next();
      }
      }
      );
    }


    app.use(router);


    app.listen(PORT, () => {
      logger.info("server listening at port " + PORT);
    });
  })
  .catch((e: any) => {
    logger.error("Error loading config file:", e);
  });
