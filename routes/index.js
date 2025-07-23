const router = require('express').Router();

router.use(require('./../controllers/user/index'));
router.use(require('./../controllers/project/index'))




module.exports = router