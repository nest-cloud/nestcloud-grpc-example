import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BOOT, IBoot } from '@nestcloud/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const boot = app.get<IBoot>(BOOT);
    await app.listen(boot.get('service.port', 3000));
}

bootstrap();
