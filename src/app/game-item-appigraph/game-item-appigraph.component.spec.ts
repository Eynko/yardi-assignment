import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemAPPIGraphComponent } from './game-item-appigraph.component';

describe('GameItemAPPIGraphComponent', () => {
  let component: GameItemAPPIGraphComponent;
  let fixture: ComponentFixture<GameItemAPPIGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameItemAPPIGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameItemAPPIGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
