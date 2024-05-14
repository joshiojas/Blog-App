"use strict";

import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.register(import("./app.ts"));

export default async (req: any, res: any) => {
  await app.ready();
  app.server.emit("request", req, res);
};
