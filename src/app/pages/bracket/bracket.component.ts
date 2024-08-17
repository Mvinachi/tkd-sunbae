import { Component, Input } from '@angular/core';

interface Match {
  player1: string;
  player2: string;
  winner?: string;
  leftChild?: Match;
  rightChild?: Match;
}

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrl: './bracket.component.scss'
})
export class BracketComponent {
  @Input() tournament: Match | undefined;
}
