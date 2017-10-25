import { Injectable } from '@angular/core';

import { Contato } from './contatos.model';
import { arrayContato } from './contatos-mock';

@Injectable()
export class ContatoService {

    // Pegar os dados de modo assíncrono com a Promise
    getContatos(): Promise<Contato[]> {
        return Promise.resolve(arrayContato);
    }

    // Método getContato para pegar o ID
    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos: Contato[]) => contatos.find((contatu) => contatu.id === id));
    }
}
