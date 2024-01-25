import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      id: '',
      name: 'Thrunks',
      power: 10,
    },
  ];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter()

  // onDeleteCharacter(index: number): void{
  //   this.onDeleteId.emit(index);
  // }

  onDeleteById(id?: string): void{
    if(!id) return;
    this.onDeleteId.emit(id);
  }

}
