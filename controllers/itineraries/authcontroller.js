import User from '../../models/User.js';

const resgitre =async (req, res,) => {
    try {
const payload = req.body;
const userExists =await User.findOne({email:payload.email})
if(userExists){
    return res.status(403).json({
        success: false,
        message: "User already exists",
        });

}
const user = await User.create(payload);
return res.status(200).json({
    success: true,
    message: "User created successfully",
    });
    }   catch (error) {
        console.log(error);
        return res.status(500).json({
        success: false,
        message: "Server Error",
        });
    }   }
export default resgitre;