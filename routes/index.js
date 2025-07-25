const router = require('express').Router();

router.use(require('./../controllers/user/index'));
router.use(require('./../controllers/project/index'));
router.use(require('./../controllers/ticket/index'))




module.exports = router