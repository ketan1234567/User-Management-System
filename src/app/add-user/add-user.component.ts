import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainServicesService } from '../main-services.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  respdata:any
  constructor(private _services:MainServicesService){}
  updateform = new FormGroup({
    name: new FormControl("",Validators.required),
    email:new FormControl('',Validators.compose([Validators.required,Validators.email])),
    role: new FormControl("",Validators.required)
  })
  SaveUser(){
    if(this.updateform.valid){
      this._services.Adduser(this.updateform.value).subscribe((result)=>{
        //console.log(result);
        this.respdata=result;
        if (this.respdata=result) {
          localStorage.setItem("add_user",JSON.stringify(this.respdata))
          alertify.success("This is SuccessFully  Inserted Data");
        } else {
          alertify.error("please Try again");
        }
      })
    }
   // console.log(this.updateform.value);

    
  }
}
