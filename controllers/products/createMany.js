import Product from "../../models/Product.js";

async function createMany(req, res) {
    try {
        let many = await Product.insertMany(req.body.data);
        return res.status(201).json({
        success: true,
        response: many
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        response: error.message
        });
    }
    }
    export default createMany;