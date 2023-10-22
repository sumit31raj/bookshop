import  {IsString, IsEmail, IsNotEmpty} from 'class-validator';

export class BookDto {
    @IsNotEmpty()
    @IsString()
    bookId: string;
}