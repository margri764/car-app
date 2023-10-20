import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Routes } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MaintenanceComponent } from './shared/messages/maintenance/maintenance/maintenance.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'carAgency';

  public disabled : boolean= false;

  constructor( 
              public router : Router,
              private modalService: NgbModal  )
  {  }


  ngOnInit(): void {

        setTimeout(()=>{

          this.disabled = true

        },5000)
        this.openModal();
  }

  openModal() {
    const modalOptions: NgbModalOptions = {
      // windowClass: 'my-custom-modal' // Aquí puedes establecer la clase CSS personalizada para el ancho del modal
      centered: true
    };
  
    const modalRef = this.modalService.open(MaintenanceComponent, modalOptions);
    modalRef.componentInstance.data = { data: "cosechadora" };
  }




 

}
