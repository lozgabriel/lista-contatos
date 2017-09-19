import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosDetalheComponent } from './contatos-detalhe.component';

describe('ContatosDetalheComponent', () => {
  let component: ContatosDetalheComponent;
  let fixture: ComponentFixture<ContatosDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
