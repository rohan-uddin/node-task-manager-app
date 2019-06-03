const express = require('express')
require('./db/mongoose')

// Setting up the Routers
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

// Starting Express
const app = express()

// Registering the Routers
app.use(express.json()) // parse incoming json
app.use(userRouter)
app.use(taskRouter)

// Setting up the Server
const port = process.env.PORT

app.listen(port, ()=> {
    console.log('Server is up on port ' + port)
})