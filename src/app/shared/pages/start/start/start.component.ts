import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  public disabled : boolean= false;
  constructor() { }

  ngOnInit(): void {

    setTimeout(()=>{

      this.disabled = true

    },1)
  }

}
