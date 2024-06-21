import { dataSource } from "../dbconfig.js";

export default [
  {
    method: "GET",
    path: "/river",
    handler: async (request, h) => {
      const riverRepository = dataSource.getRepository("River");
      const rivers = await riverRepository.find();
      return h.response(rivers).code(200);
    },
  },
  {
    method: "GET",
    path: "/river/{id}",
    handler: async (request, h) => {
      const riverRepository = dataSource.getRepository("River");
      const river = await riverRepository.findOne({
        where: { id: request.params.id },
      });
      if (river !== null) {
        console.log(river.name); // No typings
      }
      return h.response(river).code(200);
    },
  },
];
