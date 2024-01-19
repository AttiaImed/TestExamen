import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProjectServiceService} from "../../Services/project-service.service";
import {Tasks} from "../../models/Project";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  addtask !: FormGroup;
  idProjet : number = 0;
  newTask : Tasks=new Tasks();
  constructor(private form : FormBuilder,private actroute : ActivatedRoute,private ps : ProjectServiceService){
    actroute.params.subscribe(
      (data:any)=>{
        console.log(data);
        this.idProjet = data.id;
      }
    )
    this.ps.getProject(this.idProjet).subscribe(
      (data:any)=>{
        console.log(data);
        this.newTask['project'] = data;
      }
    )

    this.addtask = this.form.group({
      title : ['',Validators.required],
      datedebut : ['',Validators.required],
      datefin : ['',Validators.required],
    });
  }
  get title(){
    return this.addtask.get('title');
  }
  get datedebut(){
    return this.addtask.get('datedebut');
  }
  get datefin(){
    return this.addtask.get('datefin');
  }
  add(){
    console.log(this.addtask.value);
    console.log(this.idProjet);

    this.newTask['title'] = this.title?.value;
    this.newTask['DateD'] = this.datedebut?.value;
    this.newTask['DateF'] = this.datefin?.value;
    this.newTask['status'] = "To DO";
    console.log(this.newTask);
    this.ps.addTask(this.newTask).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )

  }

}
