import { Routes } from '@angular/router';
import { ListVigencia } from './features/vigencia/pages/list-vigencia/list-vigencia';
import { CreateVigencia } from './features/vigencia/pages/create-vigencia/create-vigencia';
import { ListAnaquel } from './features/anaquel/pages/list-anaquel/list-anaquel';
import { CreateAnaquel } from './features/anaquel/pages/create-anaquel/create-anaquel';
import { ListCajas } from './features/cajas/pages/list-cajas/list-cajas';
import { CreateCaja } from './features/cajas/pages/create-caja/create-caja';

export const routes: Routes = [
    { path: '', redirectTo: '/vigencias/create', pathMatch: 'full' }, // 👈 ruta base
    { path: 'vigencias', component: ListVigencia },
    { path: 'vigencias/create', component: CreateVigencia },
    { path: 'anaqueles', component: ListAnaquel },
    { path: 'anaqueles/create', component: CreateAnaquel },
    { path: 'cajas', component: ListCajas },
    { path: 'cajas/create', component: CreateCaja }
];
