import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    name :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['principal', 'supervisor', 'teacher', 'student'],
        required :  true
    },
    batch : {
        type : String
    },
    createdBy :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }
});

const userModel = mongoose.model('user' , userSchema);

export default userModel;