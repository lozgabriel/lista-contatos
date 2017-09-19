import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos.component';
import { ContatosDetalheComponent } from '../contatos-detalhe/contatos-detalhe.component';

const contatoRoutes: Routes = [
    { path: 'contato',
      component: ContatosComponent
    },

    { path: 'contato/save',
      component: ContatosDetalheComponent
    },

    { path: 'contato/save/:id',
      component: ContatosDetalheComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(contatoRoutes)
    ]
})

export class ContatoRoutingModule {}

