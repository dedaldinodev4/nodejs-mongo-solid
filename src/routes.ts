import { Router } from 'express'
import { createHeroController } from './usecases/CreateHero'
import { updateHeroController } from './usecases/UpdateHero'


const routes = Router();

routes.post('/heroes', (request, response) => {
    return createHeroController.handle(request, response) 
})
routes.put('/heroes/:id', (request, response) => {
    return updateHeroController.handle(request, response) 
})

export { routes }