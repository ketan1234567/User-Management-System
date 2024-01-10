import { DataSource } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  ani:any
  dataToDisplay:any
  ELEMENT_DATA:any
  editdata:any;
  vishaldata:any;
  //dataSource:any
    @ViewChild(MatTable) table: MatTable<any> | undefined;
  displayedColumns: Array<string> = [];

  dataSource: MatTableDataSource<any>= new MatTableDataSource();
  
  ngOnInit(): void {
 
    this.GetAllData()
  this.displayedColumns=['id', 'first_name', 'last_name', 'address_one','address_two','city','state','postalCode','Actions'];
    this.dataSource = (<any>this.service.GetAllContactData()).GetAllContactData;
    console.log(this.dataSource);
    
  }
  constructor(private service:UserService, private dialog: MatDialog){


  }

 // dataSource = [...this.vishaldata];



  UserForm=new FormGroup({
    id:new FormControl(),
    first_name:new FormControl('',Validators.required),
    last_name:new FormControl('',Validators.required),
    address_one:new FormControl('',Validators.required),
    address_two:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    postalCode:new FormControl('',Validators.required)


  });
  OnFormSubmit(){
   console.log(this.UserForm.value);
  }
  GetAllData(){
    this.service.GetAllContactData().subscribe(data=>{
      this.ani=data;
      console.log(data)
     // this.dataSource=data;
      this.dataSource = new MatTableDataSource(data);
      ///this.dataSource = new MatTableDataSource<User[]>(this.ani);
      this.ELEMENT_DATA = new MatTableDataSource(data);
    }) 
  }

applyFilter(event:Event)
{
  const filterValue=(event?.target as HTMLInputElement).value;
  this.dataSource.filter=filterValue.trim().toLocaleLowerCase();
console.log(this.dataSource.filter);

  
}
FunctionUpdate(id:any){
  this.service.GetElementById(id).subscribe(item => {
    console.log(this.dialog);
    
    this.editdata = item;
    console.log(this.editdata.id);
    if (this.editdata != null) {
    //  this.setValue({ id:this.editdata.id, first_name: this.editdata.first_name, last_name: this.editdata.last_name,address_one:this.editdata.address_one,address_two:this.editdata.address_two,
      //city:this.editdata.city,state:this.editdata.state,postalCode:this.editdata.postalCode});
    }
      //this.updateform.setValue({userid: this.editdata.id, role: this.editdata.role, isActive: this.editdata.isActive});
    });

// let popup=this.dialog.open(UserDialogComponent,{
//   width: '400px',
//   //  height:'300px',
//   exitAnimationDuration: '500ms',
//   enterAnimationDuration: '500ms',
//   data:{
//     id:id
//   }
// })
// popup.afterClosed().subscribe(item => {
//   this.GetAllData();
// });
// }



FunctionDelete(id: any) {
  // alertify.confirm("Remove user", "do you wnat to remove this user?", () => {
  //   this.service.RemoveUser(id).subscribe(item => {
  //     this.GetAllData();
  //     alertify.success("Removed SuccessFully");
  //   });

  // }, function () { });
}



addData() {
  // const randomElementIndex = Math.floor(Math.random() * dataSource.length);
  // this.dataToDisplay = [...this.dataToDisplay, this.ELEMENT_DATA[randomElementIndex]];
  
  //this.dataSource.setData(this.dataToDisplay);
}

removeData() {
  this.dataToDisplay = this.dataToDisplay.slice(0, -1);
  //this.dataSource.setData(this.dataToDisplay);
}
}
class ExampleDataSource extends DataSource<any> {
  private _dataStream = new ReplaySubject<any>();

  constructor(initialData: any) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<any> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: any) {
    this._dataStream.next(data);
  }


}
