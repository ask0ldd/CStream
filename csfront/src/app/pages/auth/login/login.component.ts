import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginRequest } from 'src/app/interfaces/requests/ILoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage = ""
  
  public loginForm : FormGroup = this.fb.group({
    emailOrUsername: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–\\[{}\\]:;',?/*~$^+=<>]).{8,}$")
      ]
    ]
  });

  constructor(private fb: FormBuilder){ }

  onSubmit() : void{
    if(this.loginForm.valid){
      const loginRequest = this.loginForm.value as ILoginRequest;
      // add api login call
    }else{
      this.errorMessage = "Your credentials are not valid."
    }
  }
  
}
