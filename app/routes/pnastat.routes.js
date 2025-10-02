module.exports = app => {
	  const pnastat = require("../controllers/pnastat.controller.js");

	  var router = require("express").Router();

    // Create a new Tutorial
    //  router.post("/", tutorials.create);

    // Retrieve all Tutorials
    router.get("/", pnastat.findAll);

    // Retrieve all published Tutorials
    //  router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", pnastat.findOne);
/*
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);

    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);
*/
    app.use('/api/pnastat', router);
    //app.use('/pnastat', router);
};
/*
app.use('/', router);
http://192.168.1.23:8080/0 - radek s id=0
http://192.168.1.23:8080/1 - radek s id=1

app.use('/pnastat', router);
http://192.168.1.23:8080/pnastat/
vola findAll()

*/