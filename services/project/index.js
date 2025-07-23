const {Project} = require('../../models');
const {TEXTS,STATUS_CODE} = require("../../config/constant")
const asyncErrorHandler = require('../../utils/asyncErrorHandler');

const create = asyncErrorHandler(async(req , res)=>{
    const project = await Project.create(req.body);
    
    return res.status(STATUS_CODE.CREATED).json({
        message:TEXTS.CREATED,
        project
    })
});


const getAll = asyncErrorHandler(async(req,res)=>{
    const project = await Project.findAll();
    if(project.length === 0){
        return res.status(STATUS_CODE.NOT_FOUND).json({
            message:TEXTS.NOT_FOUND
        })
    }

    return res.status(STATUS_CODE.SUCCESS).json({
        project
    })
})



module.exports = {create,getAll}