import { Component, OnInit } from '@angular/core';

import { Contato } from './contatos.model';
import { ContatoService } from './contatos.service';
//teste
@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  // Atributo Contatos
  contatos: Contato[];

  constructor(private contatoService: ContatoService) { }

  // Usando Promise para receber de forma Assíncrona
  ngOnInit(): void {
    this.contatoService.getContatos()
        .then((contatos: Contato[]) => {
            this.contatos = contatos;
        }).catch(err => {
            console.log(err);
        });
  }

}
