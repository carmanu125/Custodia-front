import { Routes } from '@angular/router';
import { ListVigencia } from './features/vigencia/pages/list-vigencia/list-vigencia';
import { CreateVigencia } from './features/vigencia/pages/create-vigencia/create-vigencia';

export const routes: Routes = [
    { path: 'vigencias', component: ListVigencia },
    { path: 'vigencias/create', component: CreateVigencia }
];
