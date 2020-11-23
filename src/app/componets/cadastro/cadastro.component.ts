
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../../services/request.service'
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formCadastro: FormGroup;
  constructor(private formList: FormBuilder, private request: RequestService) {
  };

  ngOnInit(): void {

    this.formCadastro = this.formList.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }

  cadastrar() {
    this.request.setUser(this.formCadastro.value).subscribe(res => {
      alert('Usuário: ' + this.formCadastro.get('nome').value + ' cadastrado com sucesso!');
      this.formCadastro.get('nome').setValue('');
      this.formCadastro.get('endereco').setValue('');
      this.formCadastro.get('bairro').setValue('');
      this.formCadastro.get('cidade').setValue('');
      this.formCadastro.get('estado').setValue('');
      this.formCadastro.get('zip').setValue('');
    })
  }
}
