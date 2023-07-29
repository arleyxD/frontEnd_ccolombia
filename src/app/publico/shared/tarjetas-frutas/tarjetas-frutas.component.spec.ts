import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasFrutasComponent } from './tarjetas-frutas.component';

describe('TarjetasFrutasComponent', () => {
  let component: TarjetasFrutasComponent;
  let fixture: ComponentFixture<TarjetasFrutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetasFrutasComponent]
    });
    fixture = TestBed.createComponent(TarjetasFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
