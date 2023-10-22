import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Param,
  Delete,
} from '@nestjs/common';
import { LowdbService } from './lowdb/lowdb.service';
import { BookDto } from './dto/favourite.dto';

const FAVOURITES = 'favourites';

@Controller()
export class AppController {
  constructor(private readonly lowdbService: LowdbService) { }

  @Get('books/favourites/:userId')
  async favouritesByUser(@Param() params) {
    const favourites = await this.lowdbService.findFavouriteByUser(params.userId, FAVOURITES);
    return { result: favourites };
  }

  @Post('books/favourites/:userId')
  async addFavourite(@Param() params, @Body() body: BookDto) {
    const { bookId } = body;

    const isFavouriteExist = await this.lowdbService.checkFavourite(params.userId, bookId, FAVOURITES);
    if (isFavouriteExist) {
      throw new HttpException(
        `You have already marked this book as favourite.`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    const createdFavourite = await this.lowdbService.add({ bookId }, params.userId, FAVOURITES);
    return { result: createdFavourite };
  }

  @Delete('books/favourites/:userId/:bookId')
  async deleteFavourite(@Param() params) {
    const { userId, bookId } = params;

    const isExist = await this.lowdbService.checkFavourite(userId, bookId, FAVOURITES);
    if (!isExist) {
      throw new HttpException(
        `User or Book does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }

    await this.lowdbService.delete(bookId, userId, FAVOURITES);
    return { "message": "Record deleted successfully" };
  }
}
