import { Component,  OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import Swal from 'sweetalert2';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.css'],
  providers: [UsuarioService]
})
export class ModalRegistroComponent implements OnInit {

  @ViewChild ('myModalRegistro') myModalRegistro: any;

  private modalRef: NgbModalRef;

  public usuario!: Usuario;
  public status!: string;
  public url!: string;

  constructor(
    private modalService: NgbModal,
    private _route: ActivatedRoute,
    private _router: Router,
    private _usuarioService: UsuarioService
    ) 
    
    {
      this.usuario = new Usuario('', '', '');
      this.url = Global.url;
  }

  ngOnInit(): void {

  }
  
  openModal() {
    this.modalRef = this.modalService.open(this.myModalRegistro);
    this.modalRef.result.catch(() => { });
  }
  
  closeModal() {
    this.modalRef.close();
  }

  onSubmit() {
    this._usuarioService.signup(this.usuario).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.usuario = response.usuario;

          //Alerta
          /*Swal.fire({
            title: 'Registro',
            text: 'Usuario creado con éxito!',
            icon: 'success',
            confirmButtonText: 'Ok'
          });*/

          this.modalRef.close();
          this._router.navigate(['/dashboard']);
          
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }
  
}
