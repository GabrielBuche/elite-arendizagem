import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bd = [

    { user: '1', password: '1' },
    { user: 'usergabriel', password: 'passgabriel' },
    { user: 'userpacheco', password: 'passpacheco' },
  ];

  formLogin: FormGroup;
  formCadastrar: FormGroup;

  constructor(private formB: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.bd.forEach(i => {
      localStorage.setItem(i.user, i.password);
    });


    this.formLogin = this.formB.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });


    this.formCadastrar = this.formB.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  logar() {
    if (localStorage.getItem(this.formLogin.get('user').value) === this.formLogin.get('password').value) {
      this.gerarToken();
      this.router.navigate(['home']);
    } else {
      alert('usúario não encontrado');
    }
  }
  cadastrar() {
    if (!localStorage.getItem(this.formCadastrar.get('user').value)) {
      localStorage.setItem(this.formCadastrar.get('user').value, this.formCadastrar.get('password').value);
      alert('Usuário: ' + this.formCadastrar.get('user').value + ' cadastrado com sucesso!');
    }
    else {
      alert('Usuário já exisente')
    }
  }
  gerarToken() {
    sessionStorage.setItem('token', this.gerarNumeroAleatorio())
  }
  gerarNumeroAleatorio() {
    let u = new Uint32Array(1);
    window.crypto.getRandomValues(u);
    let str = u[0].toString(16).toUpperCase();
    return '00000000'.slice(str.length) + str;
  }
}