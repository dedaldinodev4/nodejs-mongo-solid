import Hero from "../../entities/Hero";
import { IHero, IHeroRequest, IHeroUpdateRequest } from "../../dtos/Hero";
import { IHeroRepository } from "../IHeroRepository";


export class MongoHeroRepository implements IHeroRepository {
    private repository = Hero;

    async findByName(name: string): Promise<IHero>{
        const heroExists = await this.repository.findOne({ name });
    
        return heroExists;
    }

    async findById(id: string): Promise<IHero> {
        const heroExists = await this.repository.findById(id);
        return heroExists;
    }
        
        
    async save(hero: IHeroRequest): Promise<IHero> {
        const newHero = await this.repository.create(hero)
        return newHero;
    }

    async update(name: string, hero: IHeroUpdateRequest): Promise<IHero> {
        const heroUpdate = await this.repository.findOne({ name })
        
        heroUpdate.name = hero.name;
        heroUpdate.power = hero.power;
        heroUpdate.age = hero.age;

        const result = await heroUpdate.save();
        return result;
    }

}