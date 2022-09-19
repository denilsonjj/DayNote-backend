const express = require("express");
const routes = express.Router();

const AnnotationController = require("./controllers/AnnotationController");
const ContentController = require("./controllers/ContentController");
const PriorityConstroller = require("./controllers/PriorityConstroller");

//rota Annotation
routes.post("/annotations", AnnotationController.create);
routes.get("/annotations", AnnotationController.read);
routes.delete("/annotations/:id", AnnotationController.delete )

//rota priority
routes.get('/priorities', PriorityConstroller.read)
routes.post('/priorities/:id', PriorityConstroller.update)

//rota content
routes.post('/contents/:id', ContentController.update);
module.exports = routes;
