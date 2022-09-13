import { PartialType } from "@nestjs/mapped-types";
import { IsString, IsNumber } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";


/** npm i @nestjs/mapped-types 
 * mapped-types는 타입을 변환시키고 사용할 수 있게 하는 패키지
*/
export class UpdateMovieDto extends PartialType(CreateMovieDto) {

}