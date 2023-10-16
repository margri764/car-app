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

  constructor(
              private fb: FormBuilder,
) 
{ 

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
