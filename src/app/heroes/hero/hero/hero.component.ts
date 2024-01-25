import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitatizedName(){
    return this.name.toLocaleUpperCase()
  }

  get heroDescriptions(): string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = 'Spiderman'
  }

  changeAge(){
    this.age = 25
  }

  resetForm(){
    this.name = 'ironman';
    this.age = 45;
  }

}
