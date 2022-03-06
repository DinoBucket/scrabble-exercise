import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrabbleInfoComponent } from './scrabble-info.component';

describe('ScrabbleInfoComponent', () => {
  let component: ScrabbleInfoComponent;
  let fixture: ComponentFixture<ScrabbleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrabbleInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrabbleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
