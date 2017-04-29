const mongoose = require('mongoose');
const eventSchema = require('mongoose').Schema;

const schema = new eventSchema({
    name: { type: String, required: true },
    createdAt: {type: Number, default: Date.now},
    location: {
        lat: { type: Number },
        lng: { type: Number }
    },
    city: { type: String, required: true },
    organisedBy: { type: String, required: true },
    openEvent: { type: Number },
    source: { type: String },
    date: { type: Number },
    charges: { type: String }
});

schema.index({createdAt: 1});
