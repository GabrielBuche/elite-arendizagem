import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { HomeComponent } from './componets/home/home.component';
import { AuthGuard } from '../app/guards/auth.guard';
import { ListaComponent } from './componets/lista/lista.component';
import { CadastroComponent } from './componets/cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './componets/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListaComponent,
    CadastroComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
