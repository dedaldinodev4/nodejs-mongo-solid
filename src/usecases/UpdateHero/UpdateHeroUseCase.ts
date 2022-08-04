import { IHero } from "../../dtos/Hero";
import { IHeroRepository } from "../../repositories/IHeroRepository";
import { IUpdateHeroRequestDTO } from "./UpdateHeroDTO";


export class UpdateHeroUseCase {

    constructor(
        private heroRepository: IHeroRepository
    ){}

    async execute(id: string, data: IUpdateHeroRequestDTO): Promise<IHero | Error> {
        const heroExists = await this.heroRepository.findById(id);

        if (!heroExists) {
            throw new Error('Hero does not exists.')
        }

        const result = await this.heroRepository.update(heroExists.name, data)

        return result;
    }
}