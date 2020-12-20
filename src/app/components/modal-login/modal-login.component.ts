import { Component, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})

export class ModalLoginComponent {

  @ViewChild ('myModalLogin') myModalLogin: any;

  private modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) {}
  
  openModal() {
    this.modalRef = this.modalService.open(this.myModalLogin);
    this.modalRef.result.catch(() => { });
  }
  
  closeModal() {
    this.modalRef.close();
  }
  
}
