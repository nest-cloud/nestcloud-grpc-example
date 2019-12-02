import { Module } from '@nestjs/common';
import { NEST_BOOT, NEST_CONSUL } from '@nestcloud/common';
import { BootModule } from '@nestcloud/boot';
import { ConsulModule } from '@nestcloud/consul';
import { ServiceModule } from '@nestcloud/service';
import { LoadbalanceModule } from '@nestcloud/loadbalance';
import { TerminusModule } from '@nestjs/terminus';
import { HeroController } from './hero.controller';

@Module({
    imports: [
        BootModule.register(__dirname, `config.yaml`),
        ConsulModule.register({ dependencies: [NEST_BOOT] }),
        ServiceModule.register({ dependencies: [NEST_BOOT, NEST_CONSUL] }),
        LoadbalanceModule.register({ dependencies: [NEST_BOOT] }),
        TerminusModule.forRootAsync({
            useFactory: () => ({ endpoints: [{ url: '/health', healthIndicators: [] }] }),
        }),
    ],
    controllers: [HeroController],
})
export class AppModule {
}
