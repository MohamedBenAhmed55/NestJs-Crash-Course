import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.create(AppModule, {
  //   bufferLogs: true,
  // });
  // app.useLogger(app.get(MyLoggerService))
  app.enableCors()
  app.setGlobalPrefix('api')
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
