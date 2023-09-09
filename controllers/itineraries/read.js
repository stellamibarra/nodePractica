import { response } from "express";
import Itinerary from "../../models/Itinerary.js";

const read = async (req, res, next) => {
    try {
let all = await Itinerary.find().populate("_city")
return res.status(200).json({
    success:true,
    response:all
})

        
    } catch (error) {
      next(next)  
    }
}
export default read

 