import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myForm!: FormGroup;
  passwordVisible = false;
  confirm : boolean = false;
  width : number = 1000;
  phone : boolean = false;

  constructor(
              private fb: FormBuilder,
) 
{ 

  (screen.width <= 574  ) ? [this.phone = true, this.width = 300 ] :[ this.phone = false];
  (screen.width >= 1200 && screen.width <= 1600 ) ? this.width = 1000 : this.width = 900;
  (screen.width > 1600) ? this.width = 1300 : this.width = 1000;


this.myForm = this.fb.group({
user:     [ '', [Validators.required] ],
password:  [ '', [Validators.required]],
});

}

  ngOnInit(): void {
  }

  validField( field: string ) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
}

test(){
  alert('r')
}



}
