import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes }   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddUserComponent } from './add-user/add-user.component';
import{MatTableModule} from "@angular/material/table";
import { HttpClientModule } from '@angular/common/http';
import{MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from '@angular/material/card';
import{MatFormFieldModule} from "@angular/material/form-field";
import{MatInputModule} from "@angular/material/input";
import {MatSortModule} from '@angular/material/sort';
import { MaterialModule } from './Material-Module';
import { UserListComponent } from './user-list/user-list.component';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-Data';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    ModalpopupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSortModule,
    MaterialModule,
    FlexLayoutModule,
    InMemoryWebApiModule.forRoot(TestData),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
