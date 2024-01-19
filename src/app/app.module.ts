import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ProjectComponent } from './Components/project/project.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { DetailTaskComponent } from './Components/detail-task/detail-task.component';
import { WassefComponent } from './Components/wassef/wassef.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    TasksComponent,
    NavbarComponent,
    NotFoundComponent,
    LoginComponent,
    AddTaskComponent,
    DetailTaskComponent,
    WassefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
