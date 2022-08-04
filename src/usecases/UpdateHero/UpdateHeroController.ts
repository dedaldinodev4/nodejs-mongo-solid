import { Request, Response } from 'express'
import { UpdateHeroUseCase } from './UpdateHeroUseCase'
import { IHero } from '../../dtos/Hero'


export class UpdateHeroController {
    constructor(
        private updateHeroUseCase: UpdateHeroUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, age, power } = request.body;

        try {
            const data = await this.updateHeroUseCase.execute(id, {
                name, age, power
            });

            return response.status(201).json(data);
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}