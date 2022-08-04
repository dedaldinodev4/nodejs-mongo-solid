import { Document } from 'mongoose';


export interface IHero extends Document {
    name: string;
    age: number;
    power: string;
    createAt: Date;
}


export interface IHeroRequest {
    name: string;
    age: number;
    power: string;
}

export interface IHeroUpdateRequest {
    name: string;
    age: number;
    power: string;
}