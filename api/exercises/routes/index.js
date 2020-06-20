const express = require('express')

//importar la libreria de joi validation
const joiValidator = require ('express-joi-validator')

const router= express.Router()

//Importo el controller
const exerciseController= require('../controller/index')


//importar esquema de joi
const schemesExercise= require('../utils/schemesJoi')

//Get puro (Hola mundoooo)

router.get('/get_exercise_by_patient',joiValidator(schemesExercise.SchemeExercisePatientByLimb),(req,res)=>{
    exerciseController.exerciseByPatient(req.query,res)
})

router.post('/exercise_register',(req,res)=>{
    exerciseController.exerciseRegister(req.body,res)
})

module.exports= router