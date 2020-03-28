import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode:boolean=false;
  constructor() { }
  
  ngOnInit(): void {
    
  }
  registerModelToggle(){
    this.registerMode =true;
  }
  cancelRegisterMode(eve){
    this.registerMode=eve;
  }
 
}
