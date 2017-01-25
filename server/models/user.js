import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, required: true },
  nickName: String,
  problems: [{
    day: String,
    week: String,
    month: String,
    allSovled: String,
    allAttempted: String,
    create_date: {type: Date,default: Date.now}
  }],
    day: Number,
    week: Number,
    month: Number,
    allSovled: Number,
    allAttempted: Number,
    create_date: {type: Date,default: Date.now}
})

export default mongoose.model('User', userSchema)
