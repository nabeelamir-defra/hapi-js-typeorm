import { EntitySchema } from "typeorm";
import { River } from "../model/River.js";

export default new EntitySchema({
  name: "River",
  tableName: "rcr_river",
  target: River,
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
    catchment: {
      type: "many-to-one",
      target: "Catchment",
      joinColumn: {
        name: "catchment_id",
      },
    },
  },
});
