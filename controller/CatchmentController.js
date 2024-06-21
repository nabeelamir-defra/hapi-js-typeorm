import { dataSource } from "../dbconfig.js";

export default [
  {
    method: "GET",
    path: "/catchment",
    handler: async (request, h) => {
      try {
        const catchementRpository = dataSource.getRepository("Catchment");
        const catchments = await catchementRpository.find({
          relations: ["rivers"],
        });
        return h.response(catchments).code(200);
      } catch (error) {
        console.error("Error fetching catchments:", error);
        return h.response({ error: "Unable to fetch catchments" }).code(500);
      }
    },
  },
];
