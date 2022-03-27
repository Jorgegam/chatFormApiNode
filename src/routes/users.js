const { Router } = require('express');
const router = Router();
const { gettUsers, insertUser } = require('../controllers/user.controller');

router.get('/', gettUsers);

router.post('/', insertUser);

module.exports = router;