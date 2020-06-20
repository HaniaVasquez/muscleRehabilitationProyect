const mongoose = require('mongoose')

//importar la clase esquemas (para declarar los esquemas)
const {Schema}= mongoose
const ExerciseDescriptionSchema = new Schema ({
    trueTime: Number,
    state:Boolean,
    voltage: Number,
    note: String,
    trueReps: Number,
    trueSets: Number,
    trueWeight: String,
    date:Number,
    muscle: {
        muscleId:String,
        mucleName:String
    },
    exercise:{
        exerciseName:String,
        exerciseId:String
    },
    patient:{
        patientId:String,
        patientName:String,
        missingLimb:String,
        muscleId:String,
        document:String,
        muscle:String
    }
})
// Recibe un string con el nombre del modelo y el esquema como paramentros
const exerciseDescription=mongoose.model('exerciseDescription',ExerciseDescriptionSchema, 'exerciseData')
module.exports=exerciseDescription