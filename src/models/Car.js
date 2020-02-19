import { Schema, model } from 'mongoose';

const CarSchema = new Schema({
    vehicle: String,
    brand: String,
    year: String,
    price: String,
    description: String,
    created: Date,
    updated: Date
});

export default model('Car', CarSchema)