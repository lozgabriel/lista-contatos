import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-detalhe',
  templateUrl: './contatos-detalhe.component.html',
  styleUrls: ['./contatos-detalhe.component.css']
})
export class ContatosDetalheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("On INIT");
  }

}
