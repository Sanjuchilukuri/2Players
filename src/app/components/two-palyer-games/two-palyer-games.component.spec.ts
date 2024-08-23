import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPalyerGamesComponent } from './two-palyer-games.component';

describe('TwoPalyerGamesComponent', () => {
  let component: TwoPalyerGamesComponent;
  let fixture: ComponentFixture<TwoPalyerGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoPalyerGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoPalyerGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
