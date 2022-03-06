import { Component, OnInit } from '@angular/core';
import { ResultsService, ResultsTable } from '../results.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  results: ResultsTable = [];

  constructor(
    private resultsService: ResultsService
  ) { }

  ngOnInit(): void {
    this.resultsService.getResults().subscribe(
      results => this.results = results
    );
  }

}
