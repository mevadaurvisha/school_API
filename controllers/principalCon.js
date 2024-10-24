import userModel from '../models/User/user-model.js';

export const addUser = async (req, res) => {

    
    try {
       const { name,email, password, role} = req.body;
    
    const newUser = await userModel({
        name,
        email,
        password,
        role
    });

    await newUser.save();
    console.log('added user>>',newUser);

    res.status(200).json(newUser);
   } catch (err) {
    res.status(400).json({'error' : `add error ${err}`});
   }
}