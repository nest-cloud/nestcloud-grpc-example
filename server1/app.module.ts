import { Module } from '@nestjs/common';
import { BOOT, CONSUL } from '@nestcloud/common';
import { BootModule } from '@nestcloud/boot';
import { ConsulModule } from '@nestcloud/consul';
import { ServiceModule } from '@nestcloud/service';
import { LoadbalanceModule } from '@nestcloud/loadbalance';
import { HeroController } from './hero.controller';
import { resolve } from 'path';

@Module({
    imports: [
        BootModule.forRoot({ filePath: resolve(__dirname, 'config.yaml') }),
        ConsulModule.forRootAsync({ inject: [BOOT] }),
        ServiceModule.forRootAsync({ inject: [BOOT, CONSUL] }),
        LoadbalanceModule.forRootAsync({ inject: [BOOT] }),
    ],
    controllers: [HeroController],
})
export class AppModule {
}
