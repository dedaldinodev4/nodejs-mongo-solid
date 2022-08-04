import { Schema, model } from 'mongoose';
import { IHero } from '../dtos/Hero';


const HeroSchema: Schema = new Schema({
    name: { 
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    power: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default model<IHero>('Hero', HeroSchema);

