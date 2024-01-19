import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import {HEROES} from '../mock-heros';
import { NgFor } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';



@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroComponent, FormsModule, CommonModule, NgFor, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;

selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}


  
}
