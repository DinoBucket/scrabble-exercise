import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { ResultsService } from '../results.service';
import { ResultsTableComponent } from './results-table.component';

const MOCK_RESULTS = [
    {
        "playerId": 1,
        "position": 1,
        "name": "Karl Krueger",
        "played": 9,
        "score": 700
    },
    {
        "playerId": 2,
        "position": 2,
        "name": "Aaron Ashworth",
        "played": 15,
        "score": 640
    },
    {
        "playerId": 5,
        "position": 3,
        "name": "Sally Smith",
        "played": 16,
        "score": 410
    },
    {
        "playerId": 6,
        "position": 4,
        "name": "Bob Bronson",
        "played": 9,
        "score": 200
    },
    {
        "playerId": 4,
        "position": 5,
        "name": "Tony Troy",
        "played": 9,
        "score": 150
    },
    {
        "playerId": 3,
        "position": 6,
        "name": "Elliot Earnshaw",
        "played": 3,
        "score": 50
    }
];

describe('ResultsTableComponent', () => {
  let component: ResultsTableComponent;
  let fixture: ComponentFixture<ResultsTableComponent>;
  const mockResultsService = jasmine.createSpyObj<ResultsService>(
    'ResultsService',
    {
      getResults: of(MOCK_RESULTS)
    }
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsTableComponent ],
      providers: [
        { provide: ResultsService, useValue: mockResultsService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch results data from the results service', () => {
    expect(mockResultsService.getResults).toHaveBeenCalled();
  });

  it('should respond to a window resize', () => {
    const resizeSpy = spyOn(component, 'setTableColumns');
    window.dispatchEvent(new Event('resize'));
    expect(resizeSpy).toHaveBeenCalled();
  });

  it('should update the displayed columns as the window width changes', () => {
    component.setColumns(501);
    expect(component.displayedColumns).toEqual(['position', 'name', 'played', 'score']);
    component.setColumns(500);
    expect(component.displayedColumns).toEqual(['position', 'name', 'score']);
  });

  it('should filter the results by name', () => {
    expect(component.dataSource.filteredData).toEqual(MOCK_RESULTS);
    const input = fixture.debugElement.query(By.css('input'));

    // Karl should filter to Karl Krueger
    input.nativeNode.value = 'Karl';
    input.nativeNode.dispatchEvent(new KeyboardEvent('keyup'));
    fixture.detectChanges();
    expect(component.dataSource.filteredData).toEqual([MOCK_RESULTS[0]]);

    // h should filter to Aaron Ashworth, Sally Smith & Elliot Earnshaw
    input.nativeNode.value = 'h';
    input.nativeNode.dispatchEvent(new KeyboardEvent('keyup'));
    fixture.detectChanges();
    expect(component.dataSource.filteredData).toEqual([MOCK_RESULTS[1], MOCK_RESULTS[2], MOCK_RESULTS[5]]);
  });
});
