import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { CreateUserDto } from './../user/dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'Asib', weapon: 'stars' },
    { id: 1, name: 'Ahmed', weapon: 'sunchuks' },
  ];

  getNinjas(weapon?: 'stars' | 'nunchuks') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error('ninja not found');
    }
    return ninja;
  }

  creatNinjas(CreateUserDto: CreateUserDto) {
    const newNinja = {
      ...CreateUserDto,
      id: Date.now(),
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinjas(id: number, UpdateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...UpdateNinjaDto };
      }
      return ninja;
    });
    return this.getNinja(id);
  }

  removeNinja(id: number) {
    const toBeRemove = this.getNinja(id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
    return toBeRemove;
  }
}
