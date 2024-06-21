/**
 * restaurant controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::restaurant.restaurant');

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::restaurant.restaurant",
  ({ strapi }) => ({
    /**
     * Example 1: Modifying a Strapi controller function
     *
     * If you need to modify the input or output of a pre-defined Strapi controller method,
     * write a method of the same name, and use `super` to call the parent method.
     * */
    async find(ctx) {
      // your custom logic for modifying the input

      const entry = await strapi.db.query('api::restaurant.restaurant').findOne({
        select: ['name', 'description'],
        where: { name: 'Biscotte Restaurant' },
        // populate: { category: true },
      });


      console.log('This is the result of my test: ', entry);
      // ctx.query = { ...ctx.query, locale: "en" }; // force ctx.query.locale to 'en' regardless of what was requested

      // // Call the default parent controller action
      const result = await super.find(ctx);

      // // your custom logic for modifying the output
      // result.meta.date = Date.now(); // change the date that is returned

      return result;
    },

  })
);
