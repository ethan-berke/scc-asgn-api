/**
 * asgn-model.js - defining the model that corresponds to our db collection
 */

let mongoose = require("mongoose");

var asgnSchema = mongoose.Schema({
    courseName: {
        type: String
    },
    assignmentName: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        default: Date.now()
    }
});

var Assignment = module.exports = mongoose.model("Assignment", asgnSchema);
module.exports.get = function (callback, limit) {
    Assignment.find(callback).limit(limit);
}