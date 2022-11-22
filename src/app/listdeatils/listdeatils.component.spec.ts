import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdeatilsComponent } from './listdeatils.component';

describe('ListdeatilsComponent', () => {
  let component: ListdeatilsComponent;
  let fixture: ComponentFixture<ListdeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
