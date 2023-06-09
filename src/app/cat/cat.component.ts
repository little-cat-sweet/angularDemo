import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(private routerInfo: ActivatedRoute) {

  }

  name : string = "";

  ngOnInit(): void {
    this.name = this.routerInfo.snapshot.queryParams["name"]
  }

}
