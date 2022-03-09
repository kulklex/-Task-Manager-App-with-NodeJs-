const mongoose = require('mongoose');

require('dotenv').config()





 mongoose.connect(process.env.MONGO_URI, {
     useUnifiedTopology: true,
     useNewUrlParser: true,
     useFindAndModify: false,
     useCreateIndex: true
 })
 .then(()=> console.log('Connected to MongoDB...'))
 .catch((err) => {console.error('Failed to connect to mongoDB', err)})
 