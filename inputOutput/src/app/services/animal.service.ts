import { Injectable } from '@angular/core';
import { Animal } from '../models/Animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
    private animals: Animal[] = [
    new Animal('Kanin', 'Dvärgvädur', 3, 'gräs'),
    new Animal('Katt', 'BondeKatt', 5, 'fisk'),
    new Animal('hunden Jack', 'Australian', 2, 'hundmat'),
    new Animal('musen Saly', 'vanlig', 1, 'ost')
  ]

  constructor() { }

  getAnimals() {
    return this.animals;
  }
}
