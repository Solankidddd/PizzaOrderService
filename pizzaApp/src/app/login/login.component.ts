import { Component } from '@angular/core';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { RegisterService } from '../services/register.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RouteService } from '../services/route.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
firstName: any;
lastName: any;
phoneNo: any;
userId: any;
  constructor(private loginser:RegisterService, private route:Router,private routeService:RouteService,private Snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  userform=new FormGroup({
    "email":new FormControl('',[Validators.required]),
    "password":new FormControl('',[Validators.required]),
    // "firstName":new FormControl('',[Validators.required]),
    // "lastName":new FormControl('',[Validators.required]),
    // "phoneNo":new FormControl('',[Validators.required]),
    // "userId":new FormControl('',[Validators.required])
  })
  
  get email() { return this.userform.get("email");}
  get password() { return this.userform.get("password");}
  // get firstname() { return this.userform.get("firstName");}
  // get lastname( )  {return this.userform.get("lasttName");}
  // get PhoneNo( )  {return this.userform.get("phoneNo");}
  // get userID( )  {return this.userform.get("userId");}
  response:any;
  token:any;
  resdata:any;
  onSubmit(){
     this.loginser.authentication(this.userform.value).subscribe(
      response=>{
        this.loginser.userDetails= {
          email: this.userform.value.email!,
          password: this.userform.value.password!,
          // firstName:this.userform.value.firstName!,
          // lastName:this.userform.value.lastName!,
          // phone:this.userform.value.phoneNo!,
          // userId:this.userform.value.userId!

        };
         this.loginser.loggedIn();
         
        console.log(response);  // message + token
        this.resdata=response;
        console.log(this.resdata.token);
        localStorage.setItem("jwttoken", this.resdata.token);
        // this.routeService.navigateToMenuView();
        this.routeService.navigateToHomeView();
       alert("login successful");
       this.openSnackBar();
      
        
    })
   
  
}
openSnackBar() {
  this.Snack.open("Loggin Successfully", "Ok",{
     duration: 1000
});
}

}

