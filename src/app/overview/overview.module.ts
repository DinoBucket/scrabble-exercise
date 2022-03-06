import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './overview/overview.component';
import { ScrabbleInfoComponent } from './scrabble-info/scrabble-info.component';
import { CallUsComponent } from './call-us/call-us.component';
import { FindUsComponent } from './find-us/find-us.component';
import { ResultsTableComponent } from './results-table/results-table.component';

@NgModule({
  declarations: [
    OverviewComponent,
    ScrabbleInfoComponent,
    CallUsComponent,
    FindUsComponent,
    ResultsTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverviewComponent
  ]
})
export class OverviewModule { }
