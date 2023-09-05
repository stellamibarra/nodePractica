import Product from '../../models/Product.js';

async function create(req, res) {
    try {

        let one = await Product.create(req.body);
        return res.status(201).json({
            success: true,
            response: one
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            response: error.message
        });
    }
}
export default create;