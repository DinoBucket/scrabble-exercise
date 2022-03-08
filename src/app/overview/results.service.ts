import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import PLAYERS from 'src/app/players.json';

export interface ResultsTable {
  playerId: number;
  position: number;
  name: string;
  played: number;
  score: number;
}

interface Player {
  PlayerId: number;
  Name: string;
}

interface Result {
  PlayerId: number;
  Position: number;
  TotalScore: number;
  GamesPlayed: number;
}

interface GetResultsHttpResponse {
  Results: Result[];
}

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(
    private http: HttpClient
  ) { }

  getResults(): Observable<ResultsTable[]> {
    const url = 'https://mocki.io/v1/06c651bb-b43b-4483-b0e0-e85fb2e6d7b5';
    const players: Player[] = PLAYERS.Players;
    return this.http.get<GetResultsHttpResponse>(url).pipe(
      map(response => {
        const results = response.Results.sort((a,b) => a.TotalScore > b.TotalScore ? -1 : 1);
        return results.map((result: Result, i) => {
          const player = players.find(p => p.PlayerId === result.PlayerId);
          const name = player && player.Name ? player.Name : 'unknown player';
          return {
            playerId: result.PlayerId,
            position: i + 1,
            name: name,
            played: result.GamesPlayed,
            score: result.TotalScore
          };
        });
      })
    );
  }
}
