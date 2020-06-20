const joi = require('joi')

const SchemeDeletePatient = {
    body:{
        _id:joi.string().required()
    },   
}

module.exports={
    SchemeDeletePatient
}