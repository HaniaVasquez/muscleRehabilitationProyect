const patientModelCreate = require('../model/create')
const limbModelCreate = require('../../limbs/model')

async function patientCreated(data, res) {
    try {
        const answerLimb = await limbByName(data.missingLimb)
        data.limbId = answerLimb.data
        const answer = await patientModelCreate.createPatient(data)
        res.status(200).json({ message: 'Paciente creado correctamente', data: answer })
    } catch (error) {
        console.log(error);
        res.status(error.status).json({message:error.message, data:error.data})
    }
    // if(answerLimb.status!=200){
    //     res.status(answerLimb.status).json({message:answerLimb.message, data:answerLimb.data})
    // }else if (answerLimb.status==200){
    //     data.limbId=answerLimb.data
    //     const answer =  await patientModelCreate.createPatient(data)
    //     res.status(200).json({message:'Paciente creado correctamente', data:answer})
    // }
}

async function limbByName(name) {
    const limbData = await limbModelCreate.getLimbByName(name)
    console.log(limbData);
    if (limbData.length == 1) {
        return { data: limbData[0]._id, status: 200 }
    } else if (limbData.length > 1) {
        throw { data: [], status: 409, message: "Inconsistencia base de datos" }
    }
    throw { data: [], status: 404, message: "Extremidad no encontrada" }
}

module.exports = {
    patientCreated
}
