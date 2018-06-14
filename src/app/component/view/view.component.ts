import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  fname;
  lname;
  age;
  gender;
  date;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
 this.route.queryParams.subscribe(params =>{
   this.fname = params['fname'];
   this.lname = params['lname'];
   this.age = params['age'];
   this.gender = params['gender'];
   this.date = params['date'];
   
 });
 console.log(this.fname);
    console.log(this.lname);
    console.log(this.age);
    console.log(this.gender);
    console.log(this.date);
    
  }

}
