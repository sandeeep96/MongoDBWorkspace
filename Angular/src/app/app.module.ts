import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TableComponentComponent } from './table-component/table-component.component';

import { MyDataService } from './mydata.service';

const routes: Routes = [
  { path:'', 
    redirectTo: 'home',
   pathMatch: 'full' },
  { path:'home', 
    component:HomeComponentComponent,
    children:[
      { path:'', redirectTo: 'table', pathMatch: 'full' },
      { path:'table', component: TableComponentComponent},
  ]},
  { path:'**', component:ErrorComponentComponent},

 ];
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    TableComponentComponent,
    ErrorComponentComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

