import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ruan-flash-cards';

  deck = [
    {
      question: 'utara',
      answer: 'Norden',
    },
    {
      question: 'timur',
      answer: 'Osten',
    },
    {
      question: 'selatan',
      answer: 'Süden',
    },
    {
      question: 'barat',
      answer: 'Westen',
    },
  ];
}
