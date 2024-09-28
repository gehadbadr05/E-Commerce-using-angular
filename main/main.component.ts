import { Component } from '@angular/core';
import { User } from '../userRe';
import { EnrollService } from '../Services/enroll.services';
import{FormGroup ,FormControl,FormBuilder,Validators}from  '@angular/forms';
import { ConfirmPasswordValidator } from '../custom validation/confirm-passwoed.validation';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {
 
  registerationForm = this.fb.group({
    userName:['',Validators.required,Validators.minLength(4)],
    email:['',Validators.required],
    password:['',Validators.required],
    confirmPassword:[''],
  },{validator:[ConfirmPasswordValidator]})
  userModel= new User("","","","");
  get userName()
  {
    return this.registerationForm.get('userName');
  }
  get email()
  {
    return this.registerationForm.get('email');
  }
  get password()
  {
    return this.registerationForm.get('password');
  }
  constructor(private enrollService:EnrollService ,private fb:FormBuilder) { };
  onSubmit(){
   //console.log(this.userModel);
  this.enrollService.enroll(this.userModel).subscribe({
    next:(data: any)=>console.log(data),
    error:(error: any)=>console.log(error)
  })
  };
  getData()
  {
    this.registerationForm.setValue({
      userName:'Gehad Badr',
       email:' badrgehad8888Agmail.com',
      password:'123',
      confirmPassword:'123',
   
    })
};
setEmailValidator()
{
  this.registerationForm.get('subscribe')?.valueChanges.subscribe(
    checkedValue=>{
      const email=this.registerationForm.get('email');
       if(checkedValue)
       {
        console.log("entered")
        email?.setValidators(Validators.required)
        console.log(email?.hasValidator(Validators.required))
       }
       else
       {
        email?.clearValidators();
       }
       email?.updateValueAndValidity();
  })
}

}