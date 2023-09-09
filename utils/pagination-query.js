const paginationQuery = (req) => {

console.clear();

let queries = {};
let pagination = { page: 1, limit: 3 };

if (req.query.page) {
    pagination.page = req.query.page;
}
if (req.query.limit) {
    pagination.limit = req.query.limit;
}
if (req.query.name) {
    queries.name = new RegExp(req.query.name, 'i');
}


console.log('Queries:', queries); // Mostrar queries en la consola

return { queries , pagination}
 
};

export default paginationQuery
