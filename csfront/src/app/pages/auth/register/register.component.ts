import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRegisterRequest } from 'src/app/interfaces/requests/IRegisterRequest';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  errorMessage = ""

  public registerForm : FormGroup = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],
    username : [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern("^[a-zA-Z0-9_-]{6,16}$")
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–\\[{}\\]:;',?/*~$^+=<>]).{8,}$")
      ]
    ],
    passwordCheck: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–\\[{}\\]:;',?/*~$^+=<>]).{8,}$")
      ]
    ],
  });

  constructor(private fb: FormBuilder){ }

  onSubmit() : void{
    if(this.registerForm.get("password")?.value != this.registerForm.get("passwordCheck")?.value){
      this.errorMessage = "The password & its confirmation don't match."
      return;
    }

    if(this.registerForm.valid){
      const registerRequest = this.registerForm.value as IRegisterRequest;
    }else{
      if(this.registerForm.get("password")?.status != "VALID") this.errorMessage = "Your password must contain at least one lowercase letter, one uppercase letter, one number, and one special character."
      if(this.registerForm.get("email")?.status != "VALID") this.errorMessage = "The email address provided is not in a recognized format."
      if(this.registerForm.get("username")?.status != "VALID") this.errorMessage = "Your username should contain 6 to 16 characters."
    }
  }
  
}
