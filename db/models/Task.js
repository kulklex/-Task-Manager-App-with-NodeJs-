const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name should not surpass 20 characters']
    }, 

    completed: {
        type: Boolean,
        required: false,
        trim: true
    }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task