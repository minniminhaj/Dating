import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 model:any={};
 @Output() cancelRegister=new EventEmitter();
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  register(){
    debugger;
    this.authService.register(this.model).subscribe(()=>{
      console.log('successfully register');
    },error=>{
      console.log(error);
    })
    console.log(this.model);
  }
  cancel(){
    this.cancelRegister.emit(false)
    this.cancelRegister.emit(null);
    console.log('cancelled');
  }
}
