import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


// npm run start:dev
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // input값 마저도 class의 유효성을 검사할 수 있음.
  // npm i class-validator class-transformer
  app.useGlobalPipes(new ValidationPipe({
    /** 아무 decorator도 없는 어떠한 property의 객체를 거릅니다.
    * "hacked" : "by me" (명시하지 않은 객체)
    * hacked by me 라는 녀석은 우리의 Validator에 도달하지 않을 거야.
    * */ 
    whitelist : true,

    /** 누가 이상한걸 보내면, 리퀘스트 자체를 막아버릴 수도 있다. */
    forbidNonWhitelisted : true,

    /** 편리기능 - 유저가 보낸 값을 우리가 원하는 실제 타입으로 변환해줌
     * 예) parameter는 string으로 가져오지만, id 값은 number로 필요함. 그래서 transform을 써서 원하는 타입으로 변환해서 값을 받으면 됨.
    */
    transform: true
  }));
  await app.listen(3000);
}
bootstrap();
