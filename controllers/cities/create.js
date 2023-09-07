import City from "../../models/City.js";

export default async (req, res) => {
    try {
        await City.create(req.body);
        return res.status(201).json({
        success: true,
        message: "City created successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        success: false,
        message: "Server Error",
        });
    }
    }