const mongoose = require('mongoose')

//importar la clase esquemas (para declarar los esquemas)
const {Schema}= mongoose
const ExerciseDataSchema = new Schema ({
    name: String,
    gender:String,
    document: Number,
    age: Number,
    admissionDate: Number,
    missingLimb: String,
    incidentDate: Number,
    limbId:String,
    dateOfBirth: Number
})
// Recibe un string con el nombre del modelo y el esquema como paramentros
const exerciseData=mongoose.model('exerciseData',ExerciseDataSchema, 'exerciseDescription')
module.exports=exerciseData