//Conexión a la base de datos
//Se importaria el esquema de pacientes
const Patient = require('../../../schemes/patients')

//definición de funciones para consultar base de datos
const getAllPatients=async()=>{
   
    const answer=await Patient.find()
    return answer
}
const getPatientById=async(id)=>{
    const answer=await Patient.find({"_id":id})
    return answer
}
module.exports={
    getAllPatients,
    getPatientById
}