const Joi = require("joi");

const validation = Joi.object().keys({

        email:Joi.string().required().email(),
        password:Joi.string().min(8).required()

})

module.exports=validation