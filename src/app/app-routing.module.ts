import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksComponent} from "./Components/tasks/tasks.component";
import {ProjectComponent} from "./Components/project/project.component";
import {NotFoundComponent} from "./Components/not-found/not-found.component";
import {LoginComponent} from "./Components/login/login.component";
import {AddTaskComponent} from "./Components/add-task/add-task.component";
import {DetailTaskComponent} from "./Components/detail-task/detail-task.component";
import {WassefComponent} from "./Components/wassef/wassef.component";

const routes: Routes = [



  {path:"Task" , component : TasksComponent},
      {
        path :"add/:id",
        component : AddTaskComponent
      },
  {path : "wassef", component : WassefComponent},
  {
    path :"Project",
    component : ProjectComponent
  },
  {
    path :"details/:id",
    component : DetailTaskComponent
  },

  {path:"login",component : LoginComponent},
  {path:'' ,redirectTo:"/login", pathMatch:"full"},
  {path :"**" , component : NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
