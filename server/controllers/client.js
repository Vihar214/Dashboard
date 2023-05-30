import Product from "../models/Product.js";
import ProductStat from "../models/ProductsStat.js";

export const getProducts = async (req,res)=>{
    try{
        const products = await Product.find();
        const productWithStats = await Promise.all(
            products.map(async (products) => {
                const state = await ProductStat.find({
                    productId: product._id
                })
                return {
                    ...Product._doc,
                    stat,
                }
            })
        );
        res.status(200).json(productWithStats);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}