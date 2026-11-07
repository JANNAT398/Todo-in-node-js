require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Task = require('./Models//schemaModel')
const app = express()
app.use(express.json())


mongoose.connect('mongodb+srv://practice:gsjfHDbvY4TdmWCX@cluster0.q6mbgav.mongodb.net/todo '
)
  .then(() => console.log('Connected!'));


app.post('/create/todo',async(req,res)=>{
    let {task,priority} = req.body
    let user = new Task({
        task:task,
        priority:priority
    })
    await user.save()
})

app.get('/all/todo',async(req,res)=>{
    let data = await Task.find()
    res.send(data)
})


app.delete('/delete/todo/:id',async(req,res)=>{
    let {id} = req.params
    await Task.findByIdAndDelete(id)
    res.send('delete todo')
})

app.get('/update/todo/:id',async(req,res)=>{
    let {id} = req.params
    await Task.findByIdAndUpdate(id,req.body)
    res.send('update todo')
})

app.listen(5000,(req,res)=>{
    console.log('database connected')
})



























// require('dotenv').config();

// const express = require('express');
// const multer = require('multer');

// const app = express();

// const securityMaintain = require('./Middleware/security');
// const mongodbConnect = require('./config/mongodbConfig');

// const { registrationController } = require('./controller/authenticationController');

// const User = require('./Models/schemaModel');

// app.use(express.json());

// // MongoDB Connection
// mongodbConnect();


// // Multer Storage Configuration
// const storage = multer.diskStorage({

//     destination: function (req, file, cb) {
//         cb(null, './uploads');
//     },

//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }

// });


// // Multer Upload Middleware
// const upload = multer({ storage: storage });


// // Create Todo
// app.post('/create/todo', upload.single('profile'), registrationController);


// // Get All Todo
// app.get('/all/todo', securityMaintain, async (req, res) => {

//     let data = await User.find({});

//     res.send(data);

// });


// // Delete Todo
// app.delete('/delete/:id', async (req, res) => {

//     const { id } = req.params;

//     await User.findByIdAndDelete(id);

//     res.send("delete");

// });


// // Update Todo
// app.post('/update/:id', async (req, res) => {

//     let { id } = req.params;

//     let update = await User.findByIdAndUpdate(
//         id,
//         req.body,
//         { new: true }
//     );

//     res.send(update);

// });


// // Server
// app.listen(5000, () => {
//     console.log('Server running on port 5000');
// });