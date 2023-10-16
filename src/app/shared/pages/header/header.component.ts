import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  clicked: boolean= false;
  disabled = true;
  active = 0;
  phone : boolean = false;
  width : string = "150"


  constructor(
              public router : Router,
              public route : ActivatedRoute,

  ) {  }



showNavContent( ){
  
    this.clicked=true;
}


goTo(){
  this.router.navigateByUrl('home');
}



  ngOnInit(): void {

  
  }

}
