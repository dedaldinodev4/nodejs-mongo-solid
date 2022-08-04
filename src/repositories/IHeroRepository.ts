import { IHero, IHeroRequest, IHeroUpdateRequest } from '../dtos/Hero'

export interface IHeroRepository {
    findByName(name: string): Promise<IHero>;
    findById(id: string): Promise<IHero>;
    update(name: string, hero: IHeroUpdateRequest): Promise<IHero>;
    save(hero: IHeroRequest): Promise<IHero>;
}