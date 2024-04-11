const express = require('express');
const router = express.Router()
const { auth} = require('../middleware/auth');
const {all, add} = require("../controllers/employees");

router.get('/', auth, all)
router.get('/:id', auth, () => console.log('get single employees'))
router.post('/add', auth, add)
router.post('/remove/:id', auth, () => console.log('remove employees'))
router.put('/edit/:id', auth, () => console.log('edit employees'))

module.exports = router