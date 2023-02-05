// Title: nodebucket
// Author: Professor Krasso
// Modified by: Kailee Stephens
// Attributions: Code from Bellevue Web Dev GitHub Repository
// https://github.com/buwebdev/web-450

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creates mongoose schema for tasks
let itemSchema = new Schema({
    text: { type: String }
})

module.exports = itemSchema;
