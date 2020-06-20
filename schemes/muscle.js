const mongoose = require('mongoose')

const {Schema}= mongoose
const Muscle= new Schema({
    muscleName: String
})
const muscle = mongoose.model ('muscle', Muscle, 'muscle')
module.exports=muscle
