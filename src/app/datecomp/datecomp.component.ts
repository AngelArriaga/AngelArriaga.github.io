import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datecomp',
  templateUrl: './datecomp.component.html',
  styleUrls: ['./datecomp.component.css']
})
export class DatecompComponent implements OnInit {

  showDate:Date;
  
  constructor() { }

  ngOnInit() {
  }

  updateDate(){
    this.showDate = new Date();
  }

}
