import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilProductComponent } from './fil-product.component';

describe('FilProductComponent', () => {
  let component: FilProductComponent;
  let fixture: ComponentFixture<FilProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilProductComponent]
    });
    fixture = TestBed.createComponent(FilProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
