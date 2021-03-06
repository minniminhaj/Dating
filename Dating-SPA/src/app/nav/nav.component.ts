import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={};
  constructor(private authService :AuthService ) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.model).subscribe(next =>{
      console.log('logged in successfully');
    },error=>{
      console.log('failed to login');
    })
  }
  loggedIn(){
    const token=localStorage.getItem('token');
    console.log(token);
    return !!token;
  }
  logout(){
    localStorage.removeItem('token');
  }
}
