import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, required: true },
  nickName: String,
})

export default mongoose.model('User', userSchema)
