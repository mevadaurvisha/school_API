import userModel from "../models/User/user-model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginCon = async (req, res) => {

    const {email, password} = req.body;

    try {

        const user = await userModel.findOne({email});

        if(!user){
            res.status(400).json({"error" : "User not found.."});
        }

        // compare password
        const validPassword = bcrypt.compareSync(password, user.password);

        if(!validPassword) {
            res.status(400).json({'error' : "invalid password"});
        }

        // generate jwt token while login
        // const token = jwt.sign({ id:user._id, role: user.role}, mysecretkey);
        // console.log('token ...' , token);

        res.json({"msg" : "login Sucessfully" , user});

    }catch (err) {
        res.status(400).json({'error' : `login error ${err}`});
    }
};

export const getallLogins = async (req, res) => {

    try { 
        const logedUser = await userModel.find();

        res.json({"msg" : "all users retrived sucessfully", logedUser});
    }catch (err) {

        res.json({'error' : "can't find all loged users"});
    }
}