const muscle = require('../../../schemes/muscle')

//definición de funciones para consultar base de datos
const getMucleByid=async(id)=>{ 
    const muscleById=(await muscle.find({"_id":id}).select({_id:1, muscleName:1}))
    return muscleById
}

module.exports={
    getMucleByid
}