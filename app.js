const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const notFound = require('../starter/middleware/notFound')

app.use(express.static('./public'))
app.use(express.json())

require('./db/connect')



app.use('/api/v1/tasks', tasks)


app.use(notFound)
const port = process.env.PORT || 7000 
app.listen(port, () => {console.log(`Listening at port ${port}....`)})