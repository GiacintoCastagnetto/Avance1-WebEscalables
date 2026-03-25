import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { GameCatalog } from './pages/game-catalog/game-catalog';
import { GameDetail } from './pages/game-detail/game-detail';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'games', component: GameCatalog },
  { path: 'game/:id', component: GameDetail },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '' } // Redirigir a Home si la ruta no existe
];