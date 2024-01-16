
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MainServicesService } from '../main-services.service';
import * as alertify from 'alertifyjs';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})

export class UserListComponent implements OnInit {

 constructor(private service:MainServicesService) { }
  ngOnInit(): void {
    this.GetAlluser();
  }

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  dataSource: any;
  userDetails: any

  GetAlluser() {
    this.service.GetAlluser().subscribe(item => {
      this.userDetails = item;
      this.dataSource = new MatTableDataSource<any>(this.userDetails);
      this.dataSource.paginator = this.paginator;
      // console.log(this.userDetails);
    });

  }
  displayedColumns: string[] = ['userid', 'username', 'email', 'IsActive', 'Role', 'Actions'];
  // dataSource = ELEMENT_DATA;
  FunctionUpdate(userid: any) {
   


  }
  FunctionDelete(userid: any) {
    alertify.confirm("Remove user", "do you wnat to remove this user?", () => {
      this.service.deleteById(userid).subscribe(item => {
        this.GetAlluser();
        alertify.success("Removed SuccessFully");
      });

    }, function () { });
  }
}
