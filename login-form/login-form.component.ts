import { Component } from '@angular/core';
import { User } from '../User';
import { EnrollService } from '../Services/enroll.services';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  credentials = { email: '', password: '' };
  userModel= new User(" "," ");
   enrollService: any;
 
  onSubmit()
  { 
    console.log(this.userModel);
   
  }
 
}
