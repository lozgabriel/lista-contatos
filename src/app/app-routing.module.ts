import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatoRoutingModule } from './contatos/contatos-routing.module';

const routes: Routes = [
    {path: '', redirectTo: '/contato', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        ContatoRoutingModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
