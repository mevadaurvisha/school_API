import mongoose from 'mongoose';

const db = mongoose.connect('mongodb://localhost:27017/school_API').then((res) => {

    console.log('DB Connected');
}).catch((err) => {

    console.log('database Err');
})

export default db;