/**
 * service controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::service.service",
  ({ strapi }) => ({
    async delete(ctx) {
      const { colorId } = ctx.query;

      const colors = await strapi.entityService.findMany("api::color.color", {
        filters: { name: { $eq: colorId } },
      });

      if (colors.length === 0) {
        return ctx.throw(404, "No color found");
      }

      const color = colors[0];
      console.log("color found:", color);

      const lastServices = await strapi.entityService.findMany(
        "api::service.service",
        {
          filters: { color: { id: { $eq: color.id } } },
          sort: { createdAt: "desc" },
          limit: 1,
        }
      );
      console.log("lastServices found:", lastServices);

      if (lastServices.length === 0) {
        return ctx.throw(404, "No service found for this color");
      }

      const lastService = lastServices[0];

      await strapi.entityService.delete("api::service.service", lastService.id);

      console.log("colorId:", colorId);

      ctx.send({ message: "deleted" });
    },
  })
);
