import userModel from '../models/User/user-model.js';

export const addUser = async (req, res) => {

    
    try {
       const { username, password, role} = req.body;
    
    const newUser = await userModel({
        username,
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