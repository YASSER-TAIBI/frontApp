import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContratComponent } from './search-contrat.component';

describe('SearchContratComponent', () => {
  let component: SearchContratComponent;
  let fixture: ComponentFixture<SearchContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
