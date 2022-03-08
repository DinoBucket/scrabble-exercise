import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { SharedModule } from 'src/app/shared/shared.module';

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
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    SharedModule
  ],
  exports: [
    OverviewComponent
  ]
})
export class OverviewModule { }
