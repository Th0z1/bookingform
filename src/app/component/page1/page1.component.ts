import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  fname;
  lname;
  age;
  gender;
  date;

  constructor(
    
    private router: Router) { }

  ngOnInit() {
  }
 
  onLogin(){
    console.log(this.fname);
    console.log(this.lname);
    console.log(this.age);
    console.log(this.gender);
    console.log(this.date);
    
    this.router.navigate(['detailpage'],{queryParams:{fname:this.fname,lname:this.lname,age:this.age,gender:this.gender,date:this.date}}) 
  } 
}
