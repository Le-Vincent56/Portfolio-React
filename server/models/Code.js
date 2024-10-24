// Imports
const mongoose = require('mongoose');

// Define the Code schema
const CodeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    roles: {
        type: [String],
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    achievements: {
        type: [String]
    },
    postmortem: {
        type: [String]
    },
    imageURL: {
        type: String,
        trim: true
    },
    id: {
        type: Number,
        required: true,
    },
});

CodeSchema.statics.toAPI = (doc) => ({
    title: doc.title,
    genre: doc.genre,
    about: doc.about,
    achievements: doc.achievements,
    postmortem: doc.postmortem,
    imageURL: doc.imageURL,
    id: doc.id,
});

// Establish the Code model
const CodeModel = mongoose.model('Code', CodeSchema);

// Exports
module.exports = CodeModel;