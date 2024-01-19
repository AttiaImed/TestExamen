import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tasks} from "../models/Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor(private http : HttpClient) { }
  getProjects(){
    return this.http.get("http://localhost:3000/projects");
  }
  getProject(id : number){
    return this.http.get("http://localhost:3000/projects/"+id);
  }
  addProject(project : any){
    return this.http.post("http://localhost:3000/projects",project);
  }
  deleteProject(id : number){
    return this.http.delete("http://localhost:3000/projects/"+id);
  }
  updateProject(project : any){
    return this.http.put("http://localhost:3000/projects/update",project);
  }
  getTasks(){
    return this.http.get("http://localhost:3000/tasks");
  }
  getTask(id : number):Observable<Tasks>{
    return this.http.get<Tasks>("http://localhost:3000/tasks/"+id);
  }
  addTask(task : any){
    return this.http.post("http://localhost:3000/tasks",task);
  }
}
