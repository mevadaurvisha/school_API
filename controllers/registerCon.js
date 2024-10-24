import bcrypt from 'bcrypt';
const saltRounds = 10;
import userModel from '../models/User/user-model.js';

export const registerCon = async (req, res) => {

    const {name, email, password, role} = req.body;

    try {
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        
        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        console.log('hashed password', hashedPassword);

        res.json({'msg' : 'new user registered sucessfully...' , user_id : newUser.id, password : hashedPassword});
    }catch (err) {
        res.status(400).json({'error' : `user registration error ${err}`});
    }
}


export const allregisteredUser = async (req, res) => {

    const {name, email, password, role} = req.body;
    try{
        const alluser = await userModel.find();

        res.json(alluser);
    }catch(err) {
        json.status(400).json({'error' : "asfvjbaksjfvgb"});
    }
}

export const registeredUser = async (req, res) => {

    const {id} = req.params;

    try {

        const user = await userModel.findById({_id : id});

        res.json(user);

    }catch (err) {
        res.status(400).json({"error" : "registered user not found"});
    }

}

export const editUser = async (req, res) => {

    const {id} = req.params;

    try {

        const editUser = await userModel.findByIdAndUpdate({_id : id});

        res.json(editUser);

    }catch (err) {
        res.status(400).json({"error" : "registered user not found"});
    }

}

export const deleteUser = async (req, res) => {

    const {id} = req.params;

    try {

        const deleteUser = await userModel.findByIdAndDelete({_id : id});

        res.json(deleteUser);

    }catch (err) {
        res.status(400).json({"error" : "registered user not found"});
    }

}