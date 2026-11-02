const express = require('express')

const Task = require('./Models/schemaModel')

const app = express()

const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect('mongodb+srv://jannataktert789_db_user:OuP3ypx5aoQ8A6c5@cluster0.d3vuwdf.mongodb.net/todo')
    .then(() => console.log('Database Connected!'))
    


app.post('/create/todo', async (req, res) => {

    let { task, priority } = req.body

    console.log(task, priority)
     if(!task){
          return res.status(400).send('give me a task')
     }
    let todo = new Task({
        task: task,
        priority: priority
    })

    await todo.save()

    res.send(todo)

})


function securityMaintain(req,res,next){
     if(req.headers.authorization == 'sgdfagdsfahj'){
          next()
     }else{
          res.status(401).send("You are not authorized")
     }
}


app.get('/all/todo',securityMaintain,async (req,res)=>{
     let data = await Task.find({})
     res.send(data)
})


app.delete('/delete/:id',async (req,res)=>{
     const {id} = req.params
     await Task.findByIdAndDelete(id)
     res.send("delete")
})



app.post('/update/:id',async (req,res)=>{
     let {id} = req.params
    let update =  await Task.findByIdAndUpdate({_id:id},req.body,{new:true})
    res.send(update)
})


app.listen(5000, () => {
    console.log('Server running on port 5000')
})
