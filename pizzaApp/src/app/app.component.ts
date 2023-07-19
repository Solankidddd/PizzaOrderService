import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzaApp';
  constructor(private rs:RegisterService,private SnackBar:MatSnackBar){}
  check()
  {
      if(!this.rs.isLoggedIn)
       {
       // alert("Please Login First!!")
       this.openSnackBar();
       }
       
  }
  openSnackBar() {
      this.SnackBar.open("Please Login First!!", "Ok",{
         duration: 1000
  });
 }
}
