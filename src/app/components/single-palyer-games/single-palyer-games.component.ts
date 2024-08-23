import { Component, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card';
import { GamesService } from '../../services/games/games.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-palyer-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-palyer-games.component.html',
  styleUrl: './single-palyer-games.component.scss'
})
export class SinglePalyerGamesComponent implements OnInit {
 games:Card[];
  constructor(private gamesService:GamesService) {
    this.games = [];
  }

  ngOnInit(): void {
    this.gamesService.getSinglePlayerGames().subscribe(games =>{
      this.games = games;
    })
  }
}
