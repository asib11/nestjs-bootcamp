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
}
