const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    taskName: {type:String}
},{
    timestamps: true
})
const user=mongoose.model('user',userSchema)
module.exports = user