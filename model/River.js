import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "River",
  tableName: "rcr_river", // Optional: Provide `tableName` property to override the default behaviour for table name.
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
