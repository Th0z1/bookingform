import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
fname;
lname;
age;
gender;
date;

  pages = [
    {name:'event',page:'event'},
    {name:'view',page:'view'},
    
    
  ]
  constructor(private route:ActivatedRoute) { }

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

