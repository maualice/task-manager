const express = require('express');
const app = express();
const tasks = require('./routes/task');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.static('./public'));
app.use(express.json()); //sin eso no voy a tener los datos de req.body enviados en formato json

//routes

app.use('/api/v1/tasks', tasks);

//app.get('/api/v1/tasks')          -get all the tasks
//app.post('/api/v1/tasks')         -create new task
//app.get('/api/v1/tasks/:id')      -get single task
//app.patch('/api/v1/tasks/:id')    -update task
//app.delete('/api/v1/tasks/:id')   -delete task

//v1 es una convencion,indicando que esas son rutas de la api ,ya que puede que el servidor sirva otro tipo de recursos como index.html

app.use(notFound); // send 404 if no other route matched

app.use(errorHandlerMiddleware);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
