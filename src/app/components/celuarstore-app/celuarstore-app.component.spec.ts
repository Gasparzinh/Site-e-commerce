import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeluarstoreAppComponent } from './celuarstore-app.component';

describe('CeluarstoreAppComponent', () => {
  let component: CeluarstoreAppComponent;
  let fixture: ComponentFixture<CeluarstoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeluarstoreAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeluarstoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
