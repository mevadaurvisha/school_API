import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({

    name :{
        type : String,
        required : true
    },
    rollNumber : {
        type : String,
        required : true,
        unique : true
    },
    class : {
        type : String,
        required : true
    },
    PreTeacher : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    batch : {
        type : String
    }
})

const studentModel = mongoose.model('student',studentSchema);

export default studentModel;