const patientsModel=require('../model/delete')

const deletePatients=async(data, res)=>{
    try{
        const answerDelete= await patientsModel.deletePatient(data._id)
        if(answerDelete==null){
            res.status(404).json({message:'Paciente no encontrado', data:[], status:404})
        }
        res.status(200).json({message:'Paciente borrado con exito', data:answerDelete, status:200})
    }catch(err){
        console.log(err);
        res.status(err.status).json({message:err.message,data:err.data, status:err.status})
        
    }

}

module.exports={
    deletePatients
}