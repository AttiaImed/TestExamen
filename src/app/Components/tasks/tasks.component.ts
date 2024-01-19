import { Component } from '@angular/core';
import {ProjectServiceService} from "../../Services/project-service.service";
import {Tasks} from "../../models/Project";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks : Tasks [] = [];
  constructor(private projetservice : ProjectServiceService) {
    this.projetservice.getTasks().subscribe(
      (data:any)=>{
        this.tasks = data;
      }
    )
  }
}
