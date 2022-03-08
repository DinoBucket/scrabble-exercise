import { Component, ViewChild, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ResultsService, ResultsTable } from '../results.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'played', 'score'];
  dataSource: MatTableDataSource<ResultsTable>;
  @ViewChild(MatSort) sort = new MatSort();

  constructor(
    private resultsService: ResultsService
  ) {
    this.dataSource = new MatTableDataSource<ResultsTable>();
    this.dataSource.filterPredicate = (data: ResultsTable, filter: string) => !filter || data.name.toLowerCase().includes(filter);
  }

  ngOnInit(): void {
    this.resultsService.getResults().subscribe(
      results => {
        this.dataSource.data = results;
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  @HostListener('window:resize', ['$event'])
  setTableColumns(event: any) {
    if (window.innerWidth > 500) {
      this.displayedColumns = ['position', 'name', 'played', 'score'];
    }
    else {
      this.displayedColumns = ['position', 'name', 'score'];
    }
  }

  nameFilter(event: any) {
    const testValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = testValue.toLowerCase();
  }

}
