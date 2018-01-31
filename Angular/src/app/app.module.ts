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
import {TableModule} from 'primeng/table';
// import {DataTableModule} from 'primeng/datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDataService } from './mydata.service';

import {InputTextModule, GalleriaModule, MenubarModule, CheckboxModule, DialogModule, MessagesModule, GrowlModule,
  PanelModule, CalendarModule, RadioButtonModule, InputSwitchModule, SelectButtonModule, DataListModule,
  SplitButtonModule, ButtonModule, DropdownModule, AccordionModule, 
  TooltipModule } from 'primeng/primeng';

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
    BrowserAnimationsModule,
    // DataTableModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    InputTextModule, GalleriaModule, MenubarModule, CheckboxModule, DialogModule, MessagesModule, GrowlModule,
  PanelModule, CalendarModule, RadioButtonModule, InputSwitchModule, SelectButtonModule, DataListModule,
  SplitButtonModule, ButtonModule, DropdownModule, AccordionModule, 
  TooltipModule,
    TableModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

