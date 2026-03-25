import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameCard } from '../../components/game-card/game-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, GameCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  // Datos de prueba estáticos, faciles de entender
  popularGames = [
    { id: '1', title: 'Hollow Knight', cover: 'https://placehold.co/150x200/1e293b/94a3b8?text=HK' },
    { id: '2', title: 'Baldur\'s Gate 3', cover: 'https://placehold.co/150x200/1e293b/94a3b8?text=BG3' },
    { id: '3', title: 'Elden Ring', cover: 'https://placehold.co/150x200/1e293b/94a3b8?text=ER' },
    { id: '4', title: 'Zelda: TotK', cover: 'https://placehold.co/150x200/1e293b/94a3b8?text=Zelda' },
    { id: '5', title: 'Cyberpunk 2077', cover: 'https://placehold.co/150x200/1e293b/94a3b8?text=CP77' },
  ];
}