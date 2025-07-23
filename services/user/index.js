const {User} = require('../../models');
const {TEXTS,STATUS_CODE} = require("../../config/constant")
const asyncErrorHandler = require('../../utils/asyncErrorHandler');
const { generateToken } = require('../../utils/jwtToken')
const bcrypt = require('bcrypt')


const create = asyncErrorHandler(async (req, res) => {
  const {name,email,password,role} = req.body
    const isExist = await User.findOne({
      where: { email },
    });
  
    if (isExist) {
      return res.status(STATUS_CODE.CONFLICT).json({
        message: TEXTS.CONFLICT,
      });
    }
  
    const user = await User.create({
      name,
      email,
      password,
      role
    });
  
    return res.status(STATUS_CODE.CREATED).json({
      message: TEXTS.CREATED,
      user,
    });
  });


const login = asyncErrorHandler(async(req , res)=>{
const user = await User.findOne({
    where:{
        email:req.body.email
    }
});

if(!user){
    return res.status(STATUS_CODE.UNAUTHORIZED).json({
        message:TEXTS.UN_AUTHORIZED
    })
};

const isMatch = await bcrypt.compare(req.body.password,user.password);

if(!isMatch){
    return res.status(STATUS_CODE.UNAUTHORIZED).json({
        message:TEXTS.UN_AUTHORIZED
    })
}

const token = await generateToken(user);

return res.status(STATUS_CODE.SUCCESS).json({
    message:TEXTS.LOGIN,
    token
})
})

module.exports = {create,login}