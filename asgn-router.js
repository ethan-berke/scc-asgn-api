/**
 * asgn-router.js - contains routes for application
 */
const router = require("express").Router();
const controller = require("./asgn-controller");

router.get("/", function (req, res) {
    res.json({
        status: "API is working",
        message: "Welcome to Asgn-API!"
    });
});

router.route("/assignments")
    .get(controller.list)
    .post(controller.create);

router.route("/assignments/:assignment_id")
    .get(controller.view)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;