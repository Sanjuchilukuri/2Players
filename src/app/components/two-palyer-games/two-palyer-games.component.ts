import { Component, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card';
import { GamesService } from '../../services/games/games.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-palyer-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two-palyer-games.component.html',
  styleUrl: './two-palyer-games.component.scss'
})
export class TwoPalyerGamesComponent implements OnInit {
  games:Card[];
  constructor(private gamesService:GamesService) {
    this.games = [];
  }

  ngOnInit(): void {
    this.gamesService.getTwoPlayerGames().subscribe(games =>{
      this.games = games;
    })
  }

}
