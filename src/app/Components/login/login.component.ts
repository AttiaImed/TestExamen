import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm !:FormGroup;
  constructor(private lf : FormBuilder) {
    this.loginForm = this.lf.group(
      {
        username : ['',[Validators.minLength(3),Validators.required]],
        password : ['',[Validators.minLength(6),Validators.required,Validators.pattern('^[A-Z].*')]]
      }
    )
  }
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }

  add(){
    console.log(this.loginForm.value);
  }

}
