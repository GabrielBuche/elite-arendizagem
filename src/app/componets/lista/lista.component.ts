import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service'
import { Router } from '@angular/router';
import { EditarService } from '../../services/editar.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  users;
  $: any;
  constructor(private request: RequestService, private router: Router, private editar: EditarService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.request.getUser().subscribe(res => {
      this.users = res;
    })
  }

  remover(id) {
    this.request.removeUser(id).subscribe(res => {
      this.getUsuarios();
    })
  }
  edit(dado) {
    this.editar.selecionar(dado);
    this.router.navigate(['home/editar']);
  }
}
