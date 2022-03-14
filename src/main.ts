import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.enableCors();
  
  const config = new DocumentBuilder()
    .setTitle('Brewery API')
    .setDescription('The brewery API description')
    .setVersion('1.0')
    .addTag('beers')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  
  await app.listen(3000);
}
bootstrap();
