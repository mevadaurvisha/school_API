import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    username :{
        type : String,
        required : true
    },
    password : {
        type :String,
        required : true
    },
    role : {
        type : String,
        required : true,
        // enum : ['principal', 'supervisor', 'teacher']
    }
});

const userModel = mongoose.model('user' , userSchema);

export default userModel;