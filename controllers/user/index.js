const {create,login}  = require('../../services/user/index');
const exppress = require('express');

const router = exppress.Router();


router.post('/register',create);
router.post('/login',login);

module.exports = router