import typeorm from "typeorm";

import River from "./entity/RiverSchema.js";
import Catchment from "./entity/CatchmentSchema.js";

const dataSource = new typeorm.DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "rcr_api",
  synchronize: false,
  entities: [River, Catchment],
});

export { dataSource };
