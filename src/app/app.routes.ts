import { Routes } from '@angular/router';
import { TwoPalyerGamesComponent } from './components/two-palyer-games/two-palyer-games.component';
import { SinglePalyerGamesComponent } from './components/single-palyer-games/single-palyer-games.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'two-players',
        pathMatch: 'full'
    },
    {
        path: 'two-players',
        component: TwoPalyerGamesComponent,
        pathMatch: 'full'
    },
    {
        path: 'one-player',
        component : SinglePalyerGamesComponent,
        pathMatch: 'full'
    }
];
