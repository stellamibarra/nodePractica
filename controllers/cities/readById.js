import { response } from "express";
import City from "../../models/City.js";

const readById = async (req, res, next) => {
    try {
        const { id } = req.params; // Obtén el ID de la ciudad desde los parámetros de la URL
        const city = await City.findById(id);

        if (!city) {
            return res.status(404).json({
                success: false,
                message: "City not found",
            });
        }

        return res.status(200).json({
            success: true,
            response: city,
        });
    } catch (error) {
        next(error); // Llama a la función next con el error para manejarlo en middleware de error
    }
}

export default readById;
