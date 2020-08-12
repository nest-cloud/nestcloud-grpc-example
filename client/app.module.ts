import { Module } from '@nestjs/common';
import { BOOT, CONSUL } from '@nestcloud/common';
import { BootModule } from '@nestcloud/boot';
import { ConsulModule } from '@nestcloud/consul';
import { ServiceModule } from '@nestcloud/service';
import { LoadbalanceModule } from '@nestcloud/loadbalance';
import { TerminusModule } from '@nestjs/terminus';
import { HeroController } from './hero.controller';
import { resolve } from 'path';
import { GrpcModule } from '@nestcloud/grpc';

@Module({
    imports: [
        GrpcModule.forRoot(),
        BootModule.forRoot({ filePath: resolve(__dirname, 'config.yaml') }),
        ConsulModule.forRootAsync({ inject: [BOOT] }),
        ServiceModule.forRootAsync({ inject: [BOOT, CONSUL] }),
        LoadbalanceModule.forRootAsync({ inject: [BOOT] }),
        TerminusModule.forRootAsync({
            useFactory: () => ({ endpoints: [{ url: '/health', healthIndicators: [] }] }),
        }),
    ],
    controllers: [HeroController],
})
export class AppModule {
}
