/**
 * asgn-controller.js - connects routes, views, and models
 */

const Assignment = require("./asgn-model");

exports.list = function (req, res) {
    Assignment.get(function (err, assignments) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Assignments retrieved succesfully",
            data: assignments
        });
    });
}

exports.create = function (req, res) {
    var assignment = new Assignment();
    assignment.courseName = req.body.course ? req.body.course : assignment.name;
    assignment.assignmentName = req.body.name;
    assignment.dueDate = req.body.dueDate;
// Save assignment and check for errors
    assignment.save(function (err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: "New assignment created!",
            data: assignment
        });
    });
};

exports.view = function (req, res) {
    Assignment.findById(req.params.assignment_id, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: "Assignment details lodaing..",
            data: assignment
        });
    });
};
exports.update = function (req, res) {
    Assignment.findById(req.params.assignment_id, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        assignment.courseName = req.body.course ? req.body.course : assignment.name;
        assignment.assignmentName = req.body.name;
        assignment.dueDate = req.body.dueDate;
//save and check for errors
        assignment.save(function (err) {
            if (err) {
                res.json(err);
            }
            res.json({
                message: "Assignment info updated",
                data: assignment
            });
        });
    });
};

exports.delete = function (req, res) {
    Assignment.remove({
        _id: req.params.assignment_id
    }, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        res.json({
            status: "success",
            message: "Assignment deleted"
        });
    });
};