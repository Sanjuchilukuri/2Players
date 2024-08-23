import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePalyerGamesComponent } from './single-palyer-games.component';

describe('SinglePalyerGamesComponent', () => {
  let component: SinglePalyerGamesComponent;
  let fixture: ComponentFixture<SinglePalyerGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePalyerGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePalyerGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
