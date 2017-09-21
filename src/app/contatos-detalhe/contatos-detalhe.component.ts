import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { Contato } from '../contatos/contatos.model';
import { ContatoService } from '../contatos/contatos.service';

@Component({
  selector: 'app-contatos-detalhe',
  templateUrl: './contatos-detalhe.component.html',
  styleUrls: ['./contatos-detalhe.component.css']
})
export class ContatosDetalheComponent implements OnInit {

  constructor(
    private contatoService: ContatoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  //Pegando o Parâmetro da Rota, +params para converter em number
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id: number = +params['id'];

      this.contatoService.getContato(id)
        .then((contato: Contato) => {
            console.log(contato);
        })
    });
  }

}
