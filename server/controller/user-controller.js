import User from '../model/user.js';

export const signupUser = async (request,response) =>{
    try{
        console.log('a');
        const user = await request.body;
        console.log('b');
        const newUser = new User(user);
        console.log(user);
        console.log('c');
        await newUser.save();
        console.log('d');
        return response.status(200).json({msg: 'signup successfull'});
    } catch (error){
        return response.status(500).json({msg: 'Error while signing up the user'});
    }
}