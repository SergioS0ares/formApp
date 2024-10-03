import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoListComponentComponent } from './grupo-list-component.component';

describe('GrupoListComponentComponent', () => {
  let component: GrupoListComponentComponent;
  let fixture: ComponentFixture<GrupoListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
