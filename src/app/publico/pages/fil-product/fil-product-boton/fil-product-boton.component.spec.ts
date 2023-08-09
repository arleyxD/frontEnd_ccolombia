import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilProductBotonComponent } from './fil-product-boton.component';

describe('FilProductBotonComponent', () => {
  let component: FilProductBotonComponent;
  let fixture: ComponentFixture<FilProductBotonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilProductBotonComponent]
    });
    fixture = TestBed.createComponent(FilProductBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
