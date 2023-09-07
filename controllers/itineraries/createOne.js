import Itinerary from "../../models/Itinerary.js";

export default async (req, res) => {
    try {
        await Itinerary.create(req.body);
        return res.status(201).json({
        success: true,
        message: "Itinerary created successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        success: false,
        message: "Server Error",
        });
    }
    }