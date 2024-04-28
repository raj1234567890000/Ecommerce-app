import mongoose from 'mongoose'
const CatgeorySchema= new mongoose.Schema({
    name:{
        type:String,
        unique:true,
    },
    slug:{
        type:String,
        lowercase:true,
    }
})

export default mongoose.model('category',CatgeorySchema);