const Limb = require('../../../schemes/limbs')

//definición de funciones para consultar base de datos
const getLimbByName=async(limbName)=>{ 
    const answer=(await Limb.find({limbName}))
    return answer
}

module.exports={
    getLimbByName
}