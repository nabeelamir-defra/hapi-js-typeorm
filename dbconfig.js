import typeorm from "typeorm";

import River from "./model/River.js";
import Catchment from "./model/Catchment.js";

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
