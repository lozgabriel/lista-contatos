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

  contato: Contato;
  private isNew: boolean = true;

  constructor(
    private contatoService: ContatoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

/*
    teste() {
    console.log(this.contato);
  }
*/
  // Pegando o Parâmetro da Rota, +params para converter em number
  ngOnInit(): void {
    this.contato = new Contato(0, '', '', '');

    this.route.params.forEach((params: Params) => {
      const id: number = +params['id'];

      // Evitando erro em Novo contato
      if (id) {

        this.isNew = false;
        this.contatoService.getContato(id)
        .then((contato: Contato) => {
            this.contato = contato;
        });
      }

    });
  }

  getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
    return {
        'form-group': true,
        'has-danger': !isValid && !isPristine,
        'has-success': isValid && !isPristine
    };
}

  getFormControlClass(isValid: boolean, isPristine: boolean): {} {
    return {
        'form-control': true,
        'form-control-danger': !isValid && !isPristine,
        'form-control-success': isValid && !isPristine
    };
  }

  onSubmit(): void {
    let promise: Promise<Contato>;

    if (this.isNew) {
        console.log('cadastrar contato');
        promise = this.contatoService.create(this.contato);
    } else {
        console.log('alterar contato');
        promise = this.contatoService.update(this.contato);
    }

    promise.then(contato => this.goBack());
  }

  goBack(): void {
      this.location.back();
  }

}
