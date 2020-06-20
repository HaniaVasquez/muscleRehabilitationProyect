const Patient = require('../../../schemes/patients')


const deletePatient= async(id)=>{
    try{
        return await Patient.findByIdAndDelete(id)
        
    }catch(err){
        console.log(err);
        throw {message:"Error de base de datos",status:500, data:err}
    }
   
}

module.exports={
    deletePatient
}