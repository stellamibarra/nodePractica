const City = require('../models/city'); // Importar el modelo de la base de datos

const findById = async (id) => {
    try {
        const city = await City.findById(id); // Buscar el documento por su identificador
        if (!city) {
            return { error: 'No se encontró ninguna ciudad con el identificador proporcionado' };
        }
        return city; // Retornar el documento encontrado
    } catch (error) {
        return { error: error.message }; // Retornar un mensaje de error si ocurre algún problema
    }
};

module.exports = findById; // Exportar la función para que pueda ser utilizada en otros archivos
