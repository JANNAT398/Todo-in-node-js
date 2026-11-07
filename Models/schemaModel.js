const mongoose = require('mongoose')
const {Schema} = mongoose
let todoSchema = new Schema({
    task:{
        type:String,
        require:true
    },
    priority:{
        type:String,
        enum:['high','low','very high','moderate'],
        default:'none'
    }
})
module.exports = mongoose.model('Task',todoSchema)























// const mongoose = require('mongoose');

// const { Schema } = mongoose;

// let todoSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },

//     email: {
//         type: String,
//         required: true
//     }
// });

// module.exports = mongoose.model('User', todoSchema);
