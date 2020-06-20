const joi = require('joi')

const SchemeExercisePatientByLimb = {
    query:{
        id:joi.string().required(),
        limb:joi.string().required()
    },   
}

module.exports={
    SchemeExercisePatientByLimb
}