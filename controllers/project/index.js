const {create, getAll, getById, updateProject, remove} = require('../../services/project/index');
const router = require('express').Router();


router.post('/add-project',create);
router.get('/all-projects',getAll);
router.get('/get-project/:id',getById);
router.put('/update-project/:id',updateProject);
router.delete('/delete-project/:id',remove)


module.exports = router