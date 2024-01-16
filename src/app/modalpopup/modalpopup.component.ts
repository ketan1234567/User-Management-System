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

    if (this.updateform.valid) {
      this.editdata.name = this.updateform.getRawValue().userid
      this.editdata.role = this.updateform.getRawValue().role
      this.editdata.isActive = this.updateform.getRawValue().isActive


      console.log(this.editdata.userid);
      
      console.log(this.editdata.role);

      console.log(this.editdata.isActive);
      
      

      this._service.UpdateUser(this.editdata).subscribe(item => {
        this.savedata = item;
        //console.log(this.updateform.getRawValue());
        this.savedata = item;
        if (this.savedata = item) {
          alertify.success("This is SuccessFully Updated");
          this.ref.close();
        } else {
          alertify.error("please Try again");
        }
      });
    }

  }

  GetExistdata(userid: any) {
    this._service.GetUserById(userid).subscribe(item => {
      this.editdata = item;
      this.editdataName=item
    //  console.log(this.editdata.name);
      if (this.editdata != null) {
        this.updateform.setValue({ userid: this.editdata.name ,role: this.editdata.role, isActive: this.editdata.isActive });

        //this.updateform.setValue({userid: this.editdata.id, role: this.editdata.role, isActive: this.editdata.isActive});
      }

    });

  }


  updateform = new FormGroup({
    userid: new FormControl({ value: "", disabled: true }),
    role: new FormControl("", Validators.required),
    isActive: new FormControl(true)
  })



}
