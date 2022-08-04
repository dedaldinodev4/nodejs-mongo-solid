import { IHero } from "../../dtos/Hero";
import { IHeroRepository } from "../../repositories/IHeroRepository";
import { ICreateHeroRequestDTO } from "./CreateHeroDTO";


export class CreateHeroUseCase {

    constructor(
        private heroRepository: IHeroRepository
    ){}

    async execute(data: ICreateHeroRequestDTO): Promise<IHero | Error> {
        const heroAlreadyExists = await this.heroRepository.findByName(data.name);

        if (heroAlreadyExists) {
            throw new Error('Hero already exists.')
        }

        const result = await this.heroRepository.save(data);

        return result;
    }
}