import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/componets/login/login.component';
import { HomeComponent } from '../app/componets/home/home.component';
import { AuthGuard } from '../app/guards/auth.guard';
import { CadastroComponent } from '../app/componets/cadastro/cadastro.component';
import { ListaComponent } from '../app/componets/lista/lista.component';
import{EditarComponent} from '../app/componets/editar/editar.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'lista', pathMatch: 'full' },
      { path: 'lista', component: ListaComponent },
      { path: 'cadastro', component: CadastroComponent },
      { path: 'editar', component: EditarComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
