import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  findOne(idUser: number) {
    return this.userRepository.findOneBy({ id: idUser });
  }

  create(data: CreateUserDto) {
    const user = new User();
    user.name = data.name;
    user.address = data.address;
    user.email = data.email;
    user.password = data.password;
    user.photos = data.photos;
    user.creditcard_type = data.creditcard_type;
    user.creditcard_number = data.creditcard_number;
    user.creditcard_name = data.creditcard_name;
    user.creditcard_expired = data.creditcard_expired;
    user.creditcard_cvv = data.creditcard_cvv;
    return this.userRepository.save(user);
  }

  update(data: CreateUserDto, id: number) {
    return this.userRepository.save({ ...data, id: Number(id) });
  }

  delete(id: number) {
    return this.userRepository.delete(id);
  }
}
