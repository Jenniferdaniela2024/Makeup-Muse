const mongoose=require('mongoose');
const { Schema } = mongoose;
const Task = new Schema({
    nombre:String,
    contraseña:String
}/*,
{
    timestamps:true,
    versionKey:false
}*/
);


module.exports=mongoose.model('Task', Task) ;
