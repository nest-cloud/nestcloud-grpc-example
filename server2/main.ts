import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { BOOT, IBoot } from '@nestcloud/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const boot = app.get<IBoot>(BOOT);
    await app.connectMicroservice({
        transport: Transport.GRPC,
        options: {
            url: `0.0.0.0:${boot.get('service.port')}`,
            package: 'hero',
            protoPath: join(__dirname, './hero.proto'),
        },
    });
    await app.startAllMicroservicesAsync();
    await app.listen(null);
}

bootstrap();
