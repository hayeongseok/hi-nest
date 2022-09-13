import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-moive.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
/** 
 * GET : 요청받은 URI의 정보를 검색하여 응답
 * POST	: 요청된 자원을 생성(CREATE) 새로 작성된 리소스인 경우 URI주소를 포함하여 응답
 * PATCH : PUT과 유사하게 요청된 자원을 수정(UPDATE)할 때 사용 PUT의 경우 자원 전체를 갱신하는 의미지만, PATCH는 해당자원의 일부를 교체하는 의미로 사용
 * DELETE : 요청된 자원을 삭제할 것을 요청함(안전성 문제로 대부분의 서버에서 비활성)
 */


@Controller()
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {

    }

    @Get()
    getAll() : Movie[] {
        return this.moviesService.getAll();
    }

    @Get('/:id')
    getOne(@Param("id") movieId: number) : Movie {
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    }

    @Post() 
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId:number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id')
    path(@Param('id') movieId:number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.update(movieId, updateData)
    }    
}
