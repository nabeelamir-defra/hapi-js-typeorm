import Hapi from "@hapi/hapi";

import { dataSource } from "./dbconfig.js";
import Controllers from "./controller/index.js";

const init = async () => {
  const server = Hapi.server({
    port: 4000,
    host: "localhost",
  });

  await dataSource.initialize();

  server.route(Controllers);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
