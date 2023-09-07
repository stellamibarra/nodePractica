import City from "../../models/City.js";

// const destroy = async (req, res) => {
//   try {
//     await City.findByIdAndDelete(req.params.id);
//     return res.status(200).json({
//       success: true,
//       message: "City deleted successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// }

const destroy = async(req,res,next)=>{
        try {
            let destroyed = await City.findOneAndDelete(
                {_id: req.params.id}
            )
            if(!destroyed){
                return res.status(404).json({
                    success: false,
                    message: "City not found",
                });
            }
            return res.status(200).json({
                success: true,
                message: "City deleted successfully",
            });

        } catch (error) {
            next(error)              
        }
    }


export default destroy;