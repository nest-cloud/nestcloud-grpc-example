import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { GetHeroRequest, GetHeroResponse, Hero, ListHeroResponse } from './interfaces/hero.interface';

@Controller()
export class HeroController {
    private readonly heros: Hero[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }];

    @GrpcMethod('HeroService')
    get(data: GetHeroRequest): GetHeroResponse {
        console.log('server2 get invoked');
        return {
            hero: this.heros.find(({ id }) => id === data.id),
        };
    }

    @GrpcMethod('HeroService')
    list(): ListHeroResponse {
        console.log('server2 list invoked');
        return { heros: this.heros };
    }
}
