import City from "../../models/City.js";

export default async (req, res) => {
    try {
        const cityId = req.params.id; // Suponiendo que obtienes el ID de la ciudad desde la URL o el cuerpo de la solicitud
        const updatedData = req.body; // Los nuevos datos de la ciudad que deseas actualizar

        // Buscar la ciudad por su ID y actualizarla
        const city = await City.findByIdAndUpdate(cityId, updatedData, { new: true });

        if (!city) {
            return res.status(404).json({
                success: false,
                message: "City not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "City updated successfully",
            data: city,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}
