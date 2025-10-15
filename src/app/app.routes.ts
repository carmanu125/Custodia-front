import { Routes } from '@angular/router';
import { ListVigencia } from './features/vigencia/pages/list-vigencia/list-vigencia';
import { CreateVigencia } from './features/vigencia/pages/create-vigencia/create-vigencia';
import { ListAnaquel } from './features/anaquel/pages/list-anaquel/list-anaquel';
import { CreateAnaquel } from './features/anaquel/pages/create-anaquel/create-anaquel';

export const routes: Routes = [
    { path: '', redirectTo: '/vigencias/create', pathMatch: 'full' }, // 👈 ruta base
    { path: 'vigencias', component: ListVigencia },
    { path: 'vigencias/create', component: CreateVigencia },
    { path: 'anaqueles', component: ListAnaquel },
    { path: 'anaqueles/create', component: CreateAnaquel }
];
