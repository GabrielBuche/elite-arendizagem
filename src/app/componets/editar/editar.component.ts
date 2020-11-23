import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../../services/request.service'
import { EditarService } from '../../services/editar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  formEditar: FormGroup;
  dados;
  constructor(private formList: FormBuilder, private request: RequestService, private editar: EditarService, private router: Router) {
  }

  ngOnInit(): void {
    this.dados = this.editar.getSelecionado();
    this.formEditar = this.formList.group({
      nome: [this.dados.nome ? this.dados.nome : '', Validators.required],
      endereco: [this.dados.endereco ? this.dados.endereco : '', Validators.required],
      bairro: [this.dados.bairro ? this.dados.bairro : '', Validators.required],
      cidade: [this.dados.cidade ? this.dados.cidade : '', Validators.required],
      estado: [this.dados.estado ? this.dados.estado : '', Validators.required],
      zip: [this.dados.cep ? this.dados.cep : '', Validators.required],
    });
  }
  salvar() {
    this.request.updateUser(this.dados.id, this.formEditar.value).subscribe(res => {
      alert('Usuário: ' + this.formEditar.get('nome').value + ' alterado com sucesso!');
      this.router.navigate(['home/lista']);
    })
  }
}
