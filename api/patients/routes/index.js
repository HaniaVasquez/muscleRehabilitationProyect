const express = require('express')

//importar la libreria de joi validation
const joiValidator = require ('express-joi-validator')

const router= express.Router()

//Importo el controller
const patientsRead= require('../controller/read')
const patientsCreate= require('../controller/create')
const patientsDelete= require('../controller/delete')

//importar esquema de joi
const schemesPatients= require('../utils/schemesJoi')

//Get puro (Hola mundoooo)

router.get('/hola',(req,res)=>{
    res.status(200).json({message:'Hola mundo'})
})
router.get('/get_all_patients',(req, res)=>{
    patientsRead.getPatients(res)
})
router.post('/create_patient',(req, res)=>{
    patientsCreate.patientCreated(req.body, res)
})
router.delete('/delete_patient',joiValidator(schemesPatients.SchemeDeletePatient),(req, res)=>{
    patientsDelete.deletePatients(req.body, res)
})

module.exports= router