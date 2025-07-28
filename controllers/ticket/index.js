const {createTicket,getAll, getById, updateTicket, remove} = require('../../services/ticket/index')
const router = require('express').Router();

router.post('/create-ticket/:id',createTicket);
router.get('/all-tickets',getAll);
router.get('/get-ticket/:id',getById);
router.put('/update-ticket/:id',updateTicket);
router.delete('/delete-ticket/:id',remove)



module.exports = router