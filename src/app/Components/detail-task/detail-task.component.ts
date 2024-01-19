import { Component } from '@angular/core';
import {ProjectServiceService} from "../../Services/project-service.service";
import {ActivatedRoute} from "@angular/router";
import {Tasks} from "../../models/Project";

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})
export class DetailTaskComponent {
  id : number = 0;
  task : Tasks = new Tasks();
  constructor(private ps : ProjectServiceService,private ac : ActivatedRoute){
    this.ac.params.subscribe(
      (data:any)=>{
        console.log(data);
        this.id = data.id;
      });
    this.ps.getTask(this.id).subscribe(
      (data)=> {
        this.task = data;
      }
    )}
}
