const exerciseData = require('../../../schemes/exerciseData')
const exerciseDescription = require('../../../schemes/exerciseDescription')


//definición de funciones para consultar base de datos
const getExerciseByPatient=async(limb,id)=>{ 
    try{
        const answer=await exerciseDescription.find({"patient.missingLimb":limb, "patient.patientId":id})
        return answer
    }catch(err){
        throw {message:"Error de base de datos",status:500, data:err}
    }

}
const getExerciseDrescriptionById = async(id)=>{
    console.log(id);
    
    try{
        const answeExerciseDescription = await exerciseData.find({"_id":id}).select({_id:1,exerciseName:1})
        return answeExerciseDescription
    }catch(err){
        throw {message:"Error de base de datos",status:500, data:err}
    }
}
const createExerciseRegister= async(data)=>{

    try{
        console.log('data:', data);
        
        const newExercise= new exerciseDescription(data)
        console.log('newExercise:',newExercise);
        
        return await newExercise.save()
    }catch(err){
        throw {message:"Error de base de datos",status:500, data:err}
    }
}


module.exports={
    getExerciseByPatient,
    getExerciseDrescriptionById,
    createExerciseRegister

}