import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔥 Swagger Config
  const config = new DocumentBuilder()
    .setTitle('Student Course API')
    .setDescription('API for managing students and courses with RBAC')
    .setVersion('1.0')
    .addBearerAuth() // 🔐 JWT support
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();