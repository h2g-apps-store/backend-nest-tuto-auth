import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Le nom doit etre une chaine de caracteres' })
  @IsNotEmpty({ message: 'Le nom est requis' })
  @MinLength(3, { message: 'Le nom doit contenir au moins 3 caracteres' })
  @MaxLength(20, { message: 'Le nom doit contenir au plus 20 carateres' })
  name!: string;
  @IsString({ message: 'Le mot de passe est requis' })
  @MinLength(8, {
    message: 'Le mot de passe doit contenir au moins 8 caracteres',
  })
  @MaxLength(20, {
    message: 'Le mot de passe doit contenir au plus 20 caracteres',
  })
  password!: string;
  @IsEmail({}, { message: "l'email doit etre valide" })
  @IsNotEmpty({ message: "L'email est requis  " })
  email!: string;
  @IsOptional()
  @IsEnum(['admin', 'user'], { message: 'Le role est invalide' })
  role?: 'admin' | 'user';
}
