import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project, Tasks} from "../../models/Project";
import {Router} from "@angular/router";

@Component({
  selector: 'app-wassef',
  templateUrl: './wassef.component.html',
  styleUrls: ['./wassef.component.css']
})
export class WassefComponent {
  p : Project[] = [];
  task !: Tasks;
  constructor(private htpc : HttpClient,private route : Router) {
    // this.htpc.post("http://localhost:3000/projects").subscribe(
    //   (data)=>{
    //     this.p = data;
    // //   }
    // )
    this.task.status ="TO DO";
  }

  goto(){
    this.route.navigate(["/tasks"])
  }
}
