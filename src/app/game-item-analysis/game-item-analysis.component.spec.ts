import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemAnalysisComponent } from './game-item-analysis.component';

describe('GameItemAnalysisComponent', () => {
  let component: GameItemAnalysisComponent;
  let fixture: ComponentFixture<GameItemAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameItemAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameItemAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
