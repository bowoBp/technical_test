import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  photos: string; // Assuming this is an array of file paths

  @IsNotEmpty()
  @IsString()
  creditcard_type: string;

  @IsNotEmpty()
  @IsString()
  creditcard_number: string;

  @IsNotEmpty()
  @IsString()
  creditcard_name: string;

  @IsNotEmpty()
  @IsString()
  creditcard_expired: string;

  @IsNotEmpty()
  @IsString()
  creditcard_cvv: string;
}
