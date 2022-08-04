import { MongoHeroRepository } from '../../repositories/implementations/MongoHeroRepository'
import { CreateHeroController } from './CreateHeroController'
import { CreateHeroUseCase } from './CreateHeroUseCase'


const mongoHeroRepository = new MongoHeroRepository();

export const createHeroUseCase = new CreateHeroUseCase(
    mongoHeroRepository
)

export const createHeroController = new CreateHeroController(
    createHeroUseCase
)
