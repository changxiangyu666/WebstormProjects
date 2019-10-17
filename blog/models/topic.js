var mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://localhost/chang', { useMongoClient: true })

var Schema = mongoose.Schema

var topicSchema = new Schema({
    email: {
        type: String
        //default:
    },
    nickname: {
        type: String
        //,required: true
    },
    plate: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    created_time: {
        type: Date,
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Topic', topicSchema)
