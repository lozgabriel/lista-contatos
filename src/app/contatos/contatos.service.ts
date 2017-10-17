import { Injectable } from '@angular/core';

import { Contato } from './contatos.model';
import { arraycontato } from './contatos-mock';

@Injectable()
export class ContatoService {

    // Pegar os dados de modo assíncrono com a Promise
    getContatos(): Promise<Contato[]> {
        return Promise.resolve(arraycontato);
    }

    // Método getContato
    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos: Contato[]) => {
                return contatos.find((contato) => {
                    return contato.id === id;
                });
            });
    }
}
