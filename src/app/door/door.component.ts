import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transition, state, animate, style, trigger } from '@angular/animations';

@Component({
  selector: 'app-door',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './door.component.html',
  styleUrl: './door.component.css',
  animations: [
    trigger(
      'openAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('3000ms', style({opacity: 1})),
        ])
      ]
    )
  ],
})
export class DoorComponent implements OnInit{
  @Input() fact: string = '';
  @Input() day: number = 0;
  @Input() canBeOpened = false;
  hidden = true;

  showFact() {
    if(this.canBeOpened) {
      this.hidden = false;
      localStorage.setItem(this.day.toString(), 'wasOpened');
    }
  }

  ngOnInit(): void {
    const wasOpened = localStorage.getItem(this.day.toString());
    if (wasOpened) {
      this.hidden = false;
    }
  }
}
