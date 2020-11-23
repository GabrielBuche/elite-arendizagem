import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarService {
  selecionado = {
    nome: '',
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: ''
  };

  constructor() { }

  selecionar(dados) {
    this.selecionado = dados;
  }

  getSelecionado() {
    return this.selecionado;
  }
}
