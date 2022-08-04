import { Request, Response } from 'express'
import { CreateHeroUseCase } from './CreateHeroUseCase'
import { IHero } from '../../dtos/Hero'


export class CreateHeroController {
    constructor(
        private createHeroUseCase: CreateHeroUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, age, power } = request.body;

        try {
            const data = await this.createHeroUseCase.execute({
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