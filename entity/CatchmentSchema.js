import { EntitySchema } from "typeorm";
import { Catchment } from "../model/Catchment.js";

export default new EntitySchema({
  name: "Catchment",
  target: Catchment,
  tableName: "rcr_catchment",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
  },
  relations: {
    rivers: {
      type: "one-to-many",
      target: "River",
      cascade: true,
      inverseSide: "catchment",
    },
  },
});
