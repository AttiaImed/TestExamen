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
  constructor(private htpc : HttpClient,private route : Router) {
  }

  goto(){
  }
}
