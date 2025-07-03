import { Router } from "express";
import { ModuleResponse } from "./types/modules.types";
import { createReadStream } from "fs";
import path from "path";
import { ReadStream } from "fs";
import { streamTransformToJson } from "../../utils/stream-transform-to-json";

const router = Router();

const readModulesStream: ReadStream = createReadStream(path.join(__dirname, "../../db/modules.json"));

/* 

  GET /modules - get all modules
*/

router.get<{}, ModuleResponse | string>("/", (req, res) => {
  if (req.method === "GET") {
    readModulesStream.pipe(streamTransformToJson()).pipe(res.type("json"));
  } else {
    res.status(405).send("Method Not Allowed");
  }
});

export default router;

