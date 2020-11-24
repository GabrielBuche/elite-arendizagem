import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  formCadastrar: FormGroup;

  constructor(private formB: FormBuilder, private router: Router, private request: RequestService) {
  }

  ngOnInit(): void {
    this.formCadastrar = this.formB.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    }),

      this.formLogin = this.formB.group({
        user: ['', Validators.required],
        password: ['', Validators.required],
      })
  };

  logar() {
    this.request.getUser(this.formLogin.get('user').value).subscribe(res => {
      console.log(res);
      if (res[0] && res[0].password === this.formLogin.get('password').value) {
        sessionStorage.setItem('token', res[0].id);
        this.router.navigate(['home']);
      }
      else {
        alert('Usuário ou senha incorreta!');
        this.formLogin.get('user').setValue('');
        this.formLogin.get('password').setValue('');
      }

    })
  }
  cadastrar() {
    this.request.setUser(this.formCadastrar.value).subscribe(resp => {
      alert('Usuário ' + this.formCadastrar.get('user').value + 'cadastrado com sucesso!');
      this.formCadastrar.get('user').setValue('');
      this.formCadastrar.get('password').setValue('');
      
    })
  }
}