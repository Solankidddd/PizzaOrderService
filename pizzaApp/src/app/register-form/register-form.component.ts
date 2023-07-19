import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Foods } from '../Models/food';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,private registerserv:RegisterService,private Snackbar:MatSnackBar) { }

  registrationForm = new FormGroup
  ({
    "firstName":new FormControl('', [Validators.required,Validators.minLength(4),Validators.pattern("[A-Za-z]{1,32}")]),
    "lastName":new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern("[A-Za-z]{1,32}")]),
    "email":new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
    "password":new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]),
    "phone":new FormControl('', [Validators.required ,Validators.pattern(/^[789]\d{9,9}$/)]),
    
  });
  
  get firstName() { return this.registrationForm.get("firstName") }

  get lastName() { return this.registrationForm.get("lastName") }

  get email() { return this.registrationForm.get("email") }


  get phone() { return this.registrationForm.get("phone"); }

  get password() { return this.registrationForm.get("password"); }

  get confirmPassword() { return this.registrationForm.get("confirmPassword"); }

  onSubmit(){
    this.registerserv.storeData(this.registrationForm.value).subscribe({next(x:any){alert("data added"),console.log(x)},
  
  
    error(){alert("error")},
    
    complete(){alert("complete")}})
    this.openSnackBar();

    this.registrationForm.reset();
    console.log(this.registrationForm.value)

  }
  openSnackBar() {
    this._snackBar.open("Register Successfully", "Ok",{
         duration: 1000
  });
  }
}
