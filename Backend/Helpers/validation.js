const Joi = require("joi");

const validation = data => {
        const schema = Joi.object({
        
        user_name: Joi.string().min(3).max(20).required(),
        email:Joi.string().required().email(),
        password:Joi.string().min(8).required()

}).unknown();
 
return schema.validation(data);

}
module.exports.validation = validation;