import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemFormComponent } from './game-item-form.component';

describe('GameItemFormComponent', () => {
  let component: GameItemFormComponent;
  let fixture: ComponentFixture<GameItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameItemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
