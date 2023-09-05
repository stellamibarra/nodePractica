import User from '../../models/User.js';

export default async (req, res) => {
    // Create a new user
    // mongoose .create() method

    try {

        await User.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'User created successfully'
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};