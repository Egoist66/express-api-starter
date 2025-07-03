import { Router } from "express";
import { ModuleResponse } from "./types/modules.types";
import { createReadStream } from "fs";
import path from "path";
import { ReadStream } from "fs";
import { streamTransformToJson } from "../../utils/stream-transform-to-json";

import fs from "fs/promises";

const router = Router();

const readModulesStream: ReadStream = createReadStream(
  path.join(__dirname, "../../db/modules.json")
);

/* 

  GET /modules - get all modules
*/

router.get<{}, ModuleResponse | string>("/", async (req, res) => {
  if (req.method === "GET") {
    try {
      const data = await fs.readFile(
        path.join(__dirname, "../../db/modules.json"),
        "utf-8"
      );
      res.type("json").send(data);
    } catch (err) {
      res.status(500).send(err as string);
    }
    //readModulesStream.pipe(streamTransformToJson()).pipe(res.type("json"));
  } else {
    res.status(405).send("Method Not Allowed");
  }
});

export default router;
