import { Component } from '@angular/core';
import {ProjectServiceService} from "../../Services/project-service.service";
import {Project} from "../../models/Project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects : Project[] = [];
constructor(private ps :ProjectServiceService) {
  this.ps.getProjects().subscribe(
    (data:any)=>{
      this.projects = data;
    }
  )
}
}
