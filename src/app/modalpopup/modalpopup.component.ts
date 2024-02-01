import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainServicesService } from '../main-services.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrl: './modalpopup.component.css'
})
export class ModalpopupComponent {

  constructor(private _service: MainServicesService, @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ModalpopupComponent>) { }

  ngOnInit(): void {
    this.GetAllRole();;
    this.GetExistdata(this.data.userid);
  }
  roledata: any;
  editdata: any;
  savedata: any;
  editdataName:any
  id: any;
  GetAllRole() {
    this._service.GetAllRole().subscribe((result) => {
      this.roledata = result
    })

  }


  SaveUser() {
    //console.log(this.updateform.value);
    
    if (this.updateform.valid) {
      this.editdata.name = this.updateform.get('name').value;
      this.editdata.role = this.updateform.get('role').value;
      this.editdata.isActive = this.updateform.get('isActive').value;
  
      this._service.UpdateUser(this.editdata).subscribe(item => {
        this.savedata = item;
        if (this.savedata === item) {
          alertify.success('Successfully Updated');
          this.ref.close();
        } else {
          alertify.error('Please try again');
        }
      });
    }
  }
  

  GetExistdata(userid: any) {
    this._service.GetUserById(userid).subscribe(item => {
      // Retrieve user data and assign it to editdata and editdataName
      this.editdata = item;
      this.editdataName = item;


  console.log(this.editdataName.name);
  
  
      // Check if editdata is not null
      if (this.editdata != null) {
        // Set the values of your form using setValue
        this.updateform.setValue({
          name: this.editdata.name,
          role: this.editdata.role,
          isActive: this.editdata.isActive
        });
      }
    });
  }
  


  updateform = new FormGroup({
    name: new FormControl(),
    role: new FormControl("", Validators.required),
    isActive: new FormControl(true)
  })



}
