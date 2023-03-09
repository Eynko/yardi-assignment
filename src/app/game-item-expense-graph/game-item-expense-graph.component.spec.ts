import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemExpenseGraphComponent } from './game-item-expense-graph.component';

describe('GameItemExpenseGraphComponent', () => {
  let component: GameItemExpenseGraphComponent;
  let fixture: ComponentFixture<GameItemExpenseGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameItemExpenseGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameItemExpenseGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
