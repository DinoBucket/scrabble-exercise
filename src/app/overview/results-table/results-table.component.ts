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
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<ResultsTable>;
  @ViewChild(MatSort) sort = new MatSort();

  constructor(
    public resultsService: ResultsService
  ) {
    this.setColumns();
    this.dataSource = new MatTableDataSource<ResultsTable>();
    this.dataSource.filterPredicate = (data: ResultsTable, filter: string) => !filter || data.name.toLowerCase().includes(filter);
  }

  ngOnInit(): void {
    this.setColumns(window.innerWidth);
    this.resultsService.getResults().subscribe(
      results => {
        this.dataSource.data = results;
      }
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  @HostListener('window:resize', ['$event'])
  setTableColumns(): void {
    this.setColumns(window.innerWidth);
  }

  setColumns(width?: number): void {
    const columns = ['position', 'name', 'score'];
    if (!width || width > 500) {
      columns.splice(2, 0, 'played');
    }
    this.displayedColumns = columns;
  }

  nameFilter(event: any): void {
    const testValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = testValue.toLowerCase();
  }

}
