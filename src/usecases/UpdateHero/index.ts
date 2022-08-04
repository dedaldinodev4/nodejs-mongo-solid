import { MongoHeroRepository } from '../../repositories/implementations/MongoHeroRepository'
import { UpdateHeroController } from './UpdateHeroController'
import { UpdateHeroUseCase } from './UpdateHeroUseCase'


const mongoHeroRepository = new MongoHeroRepository();

export const updateHeroUseCase = new UpdateHeroUseCase(
    mongoHeroRepository
)

export const updateHeroController = new UpdateHeroController(
    updateHeroUseCase
)
