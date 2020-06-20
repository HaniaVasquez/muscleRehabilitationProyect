const exerciseModel = require('../model')
const patientModel = require('../../patients/model/read')
const muscleModel = require ('../../muscles/model')

const exerciseByPatient = async (query, res) => {
    try{
        const exercises = await exerciseModel.getExerciseByPatient(query.limb, query.id)
        res.status(200).json({ message: 'Ejercicios del paciente', data: exercises })
    }catch(err){
        res.status(err.status).json({ message: err.message, data: err.data })
    }
}
async function promisesArrayDataExercise(data){
    try{
        const promisesArray=[]
        promisesArray.push(patientModel.getPatientById(data.patientId))
        promisesArray.push(exerciseModel.getExerciseDrescriptionById(data.exerciseId))
        promisesArray.push(muscleModel.getMucleByid(data.muscleId))
        const answerPromiseArray = await Promise.all(promisesArray)
        console.log(answerPromiseArray);
        return answerPromiseArray
    }catch(err){
        res.status(err.status).json({ message: err.message, data: err.data })
    }
}
async function createExerciseData(data){
    // const patient = await patientModel.getPatientById(data.patientId)
    const answer = await promisesArrayDataExercise(data)
    const exerciseData = {
        trueTime:data.trueTime,
        voltage:data.voltage,
        note:data.note,
        trueReps:data.trueReps,
        trueSets:data.trueSets,
        trueWeight:data.trueWeight,
        date: null,
        exercise:{
            exerciseName: answer[1][0]._id,
            exerciseName:answer[1][0].exerciseName
        },
        muscle:{
            muscleId:answer[2][0]._id,
            mucleName:answer[2][0].muscleName
        },
        patient:{
            patientId:answer[0][0]._id,
            patientName:answer[0][0].name,
            missingLimb:answer[0][0].missingLimb,
            muscleId:answer[2][0]._id,
            document:answer[0][0].document,
            muscle:answer[2][0].muscleNames
        }
        
    }
    return exerciseData
}

const exerciseRegister=async(data, res)=>{
    try{
        const exerciseData= await createExerciseData(data)
        const answerExerciseRegister= await exerciseModel.createExerciseRegister(exerciseData)
        res.status(200).json({ message: 'Ejercicios guardado correctamente', data: answerExerciseRegister })

    }catch(err){

    }
}
module.exports = {
    exerciseByPatient,
    exerciseRegister
}