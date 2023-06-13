import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { ExceptionLoggerFilter } from './utils/exceptionLoggerFilter.exception';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ExceptionLoggerFilter(httpAdapter));
  app.useGlobalPipes(new ValidationPipe({ skipMissingProperties: true }));
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
