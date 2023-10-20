import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  constructor( private modalService: NgbModal ) {  }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalService.dismissAll()
  }


}
