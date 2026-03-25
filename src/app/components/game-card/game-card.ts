import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './game-card.html',
  styleUrl: './game-card.css'
})

export class GameCard {
  // Usamos la sintaxis moderna de Angular Signals para Inputs
  title = input.required<string>();
  coverUrl = input<string>('https://placehold.co/150x200/1e293b/94a3b8?text=No+Cover'); // Imagen por defecto
  id = input.required<string>();
  rating = input<number>(0);
}