import bcrypt from 'bcrypt';
const saltRounds = 10;
import userModel from '../models/User/user-model.js';

export const registerCon = async (req, res) => {

    const {name, email, password, role, batch, createdBy } = req.body;

    try {
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        
        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
            role,
            batch : role === 'prinacipal' ? batch : null,
            createdBy
        });

        res.json({'msg' : 'new user registered sucessfully...' , user_id : newUser.id});
    }catch (err) {
        res.status(400).json({'error' : `user registration error ${err}`});
    }
}


export const allregisteredUser = async (req, res) => {

    const {name, email, password, role, batch, createdBy } = req.body;
    try{
        const alluser = await userModel.find();

        res.json(alluser);
    }catch(err) {
        json.status(400).json({'error' : "asfvjbaksjfvgb"});
    }
}