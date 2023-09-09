import mongoose from 'mongoose';


let schema =
    new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        // _itineraries: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Itinerary'
        // }]
    });

let City = mongoose.model("City", schema);

export default City;