import Itinerary from '../../models/Itinerary.js';
import City from '../../models/City.js';

export default async (req, res) => {
    try {
        const { id } = req.query;

        // Asegúrate de que la función readById esté definida en el modelo City
        const city = await City.readById(id);

        if (!city) {
            return res.status(404).json({
                success: false,
                message: "City not found",
            });
        }

        const newItinerary = await Itinerary.create({
            image: "imagen1",
            price: 4,
            duration: 4,
            likes: 5,
            _city: city._id // Asociar el nuevo itinerario con la ciudad
        });

        // Actualizar el campo _itineraries de la ciudad
        await City.findOneAndUpdate(
            { _id: city._id },
            { $push: { _itineraries: newItinerary } }
        );

        // Obtener la ciudad actualizada
        const cityUpdated = await City.readById(id);

        return res.status(201).json({
            success: true,
            message: "City created successfully",
            city: cityUpdated
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
}
