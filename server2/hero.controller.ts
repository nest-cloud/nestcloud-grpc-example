import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';

@Controller()
export class HeroController {
    @GrpcMethod('HeroService')
    findOne(data: HeroById): Hero {
        const items: Hero[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }];
        console.log('server2 invoked');
        return items.find(({ id }) => id === data.id);
    }
}
