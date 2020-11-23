import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  mostrarMenu = true;
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  mudarMenu() {
    this.mostrarMenu = !this.mostrarMenu;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
