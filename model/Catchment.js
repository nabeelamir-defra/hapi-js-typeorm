import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Catchment",
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
