import { Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { PrincipalComponent } from './layout/principal/principal.component';
import { CarroListComponent } from './components/carro/carro-list/carro-list.component';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "admin", component: PrincipalComponent, children:[
        {path: "carro", component: CarroListComponent}
    ]}
];
