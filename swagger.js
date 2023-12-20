const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "my API",
    description: "Description",
  },
  host: "localhost:3000",
};

const outputFile = "./swagger-output-inventoryRoutes.json";
const routes = ["routes/inventoryRoutes.js"];

swaggerAutogen(outputFile, routes, doc);

//go to below link to get the documentation of the API used in this app
//http://editor.swagger.io/#/
