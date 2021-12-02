const { Schema, model } = require('mongoose');

const DepartmentSchema = new Schema({
    name: {type: String, unique: true, required: true}
});

module.exports = model("Department", DepartmentSchema);
