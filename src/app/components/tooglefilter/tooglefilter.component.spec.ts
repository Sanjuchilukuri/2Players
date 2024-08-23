import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooglefilterComponent } from './tooglefilter.component';

describe('TooglefilterComponent', () => {
  let component: TooglefilterComponent;
  let fixture: ComponentFixture<TooglefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooglefilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooglefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
