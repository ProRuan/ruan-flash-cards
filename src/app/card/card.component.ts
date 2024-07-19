import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // question: string[] = ['utara', 'timur'];
  // answer: string[] = ['Norden', 'Osten'];

  @Input() question: string = 'question';
  @Input() answer: string = 'answer';

  // question: string = 'utara';
  // answer: string = 'Norden';
}
