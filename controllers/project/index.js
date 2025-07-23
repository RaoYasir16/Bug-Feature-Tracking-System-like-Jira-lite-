const {create, getAll} = require('../../services/project/index');
const router = require('express').Router();


router.post('/add-project',create);
router.get('/all-projects',getAll)


module.exports = router