import { NgModule } from "@angular/core";
import{MatCardModule} from "@angular/material/card";
import{MatFormFieldModule} from "@angular/material/form-field";
import{MatInputModule} from "@angular/material/input";
import{MatButton, MatButtonModule} from "@angular/material/button";
import{MatTableModule} from "@angular/material/table";
import{MatPaginatorModule} from "@angular/material/paginator";
import{MatDialogModule} from "@angular/material/dialog";
import{MatSelectModule} from "@angular/material/select";
import{MatCheckboxModule} from "@angular/material/checkbox";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import {MatTableDataSource} from '@angular/material/table';
import { MatIconRegistry } from '@angular/material/icon';









@NgModule({
    exports:[
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatCheckboxModule,
        MatSelectModule,
        MatSidenavModule,
        MatExpansionModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        

    ]
})
export class MaterialModule{

}