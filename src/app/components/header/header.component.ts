import { Component, ViewChild } from '@angular/core';
import { ModalLoginComponent } from '../modal-login/modal-login.component';
import { ModalRegistroComponent } from '../modal-registro/modal-registro.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isNavbarCollapsed=true;

  @ViewChild(ModalLoginComponent) modalLogin: ModalLoginComponent;
  @ViewChild(ModalRegistroComponent) modalRegistro: ModalRegistroComponent;

  constructor() { }

  openMyModalLogin() {
    this.modalLogin.openModal();
  }
  
  openMyModalRegistro() {
    this.modalRegistro.openModal();
  }
  
}   




