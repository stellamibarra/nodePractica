
import mongoose from 'mongoose';



let schema =
    new mongoose.Schema({

        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        likes: {
            type: Number,
            required: true
        },
        _city: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'City'
        }],
    });

let Itinerary = mongoose.model("Itinerary", schema);

export default Itinerary;