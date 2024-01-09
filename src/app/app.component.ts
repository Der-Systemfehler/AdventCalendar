import { Component, OnInit } from '@angular/core';
import { DoorComponent } from './door/door.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import facts from '../assets/facts.json';
import days from '../assets/days.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DoorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Adventskalender';
  facts: string[] = facts;
  days: number[] = days;
  dayOfMonth = new Date().getDate();

  getFact(i: number) {
    return this.facts[this.days[i]-1];
  }
}


