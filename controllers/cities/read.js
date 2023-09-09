import City from "../../models/City.js";
import paginationQuery from "../../utils/pagination-query.js";

const read = async (req, res, next) => {
  try {

    const { queries, pagination } = paginationQuery(req);

    let all = await City.find(queries, "name country image _itineraries -_id ")
      .sort({ name: 'asc' })
      //    _itineraries.populate('_itineraries', 'name -_id')
      .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
      .limit(pagination.limit > 0 ? pagination.limit : 0);

    console.log("Resultado de la consulta:", all); // Mostrar el resultado de la consulta en la consola

    let count_total = await City.estimatedDocumentCount();
    let count = await City.countDocuments(queries);

    return res.status(200).json({
      success: true,
      data: all,
      count_total,
      count,
    });
  } catch (error) {
    next(error);
  }
};

export default read;
