const { Router } = require('express');
const router = Router();

const Info = require('../models/Info');

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const data = await Info.find().sort();
    res.json(data);
});
router.get('/bto', async (req, res) => {
    const data = await Info.find({SEDE: 'COL DPTAL BTO DE CARRETO'}).sort('GRUPO');
    res.json(data);
});
router.get('/ninos', async (req, res) => {
    const data = await Info.find({SEDE: 'ESC RUR. DE VARONES'}).sort('GRUPO');
    res.json(data);
});
router.get('/ninas', async (req, res) => {
    const data = await Info.find({SEDE: 'ESC RUR PARA NIÑAS'}).sort('GRUPO');
    res.json(data);
});
router.get('/veranillo', async (req, res) => {
    const data = await Info.find({SEDE: 'ERM VERANILLO'}).sort('GRUPO');
    res.json(data);
});
router.get('/palma', async (req, res) => {
    const data = await Info.find({SEDE: 'ERM LA PALMA'}).sort('GRUPO');
    res.json(data);
});
router.get('/monteria', async (req, res) => {
    const data = await Info.find({SEDE: 'ERM DE MONTERIA'}).sort('GRUPO');
    res.json(data);
});

module.exports = router;