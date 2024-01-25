import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: v4(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: v4(),
      name: 'Goku',
      power: 9500
    },
    {
      id: v4(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  public addNewElement(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: v4(),
    }
    console.log(newCharacter)
    this.characters.push(newCharacter)
  }

  public deleteItem(id: string){
    this.characters = this.characters.filter( elem => elem.id !== id)
  }
}
