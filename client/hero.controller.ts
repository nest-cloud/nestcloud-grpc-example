import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { GrpcClient, LbClient } from '@nestcloud/grpc';
import { HeroService } from './interfaces/hero-service.interface';
import { join } from 'path';

@Controller()
export class HeroController implements OnModuleInit {
    @LbClient({
        service: 'rpc-server',
        package: 'hero',
        protoPath: join(__dirname, './hero.proto'),
    })
    private readonly client: GrpcClient;
    private heroService: HeroService;

    onModuleInit() {
        this.heroService = this.client.getService<HeroService>('HeroService');
    }

    @Get()
    async execute(): Promise<any> {
        const data = await this.heroService.findOne({ id: 1 }).toPromise();
        console.log(data);
        return data;
    }
}
