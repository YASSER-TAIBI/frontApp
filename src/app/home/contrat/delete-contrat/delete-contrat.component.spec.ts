import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContratComponent } from './delete-contrat.component';

describe('DeleteContratComponent', () => {
  let component: DeleteContratComponent;
  let fixture: ComponentFixture<DeleteContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
