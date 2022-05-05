const { Schema, model } = require('mongoose');

const InfoSchema = new Schema({
    ANO: { type: String, required: true },
    JERARQUIA: { type: String, required: true },
    DANE: { type: String, required: true },
    INSTITUCION: { type: String, required: true },
    SECTOR: { type: String, required: true },
    GRADO: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Info', InfoSchema);