import { Component, OnInit } from '@angular/core';
import { UserLoginDto } from 'src/app/models/userLogin.model';
import { LoginService } from 'src/app/service/login.service';
import { Router, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserLoginDto = {
    Username: '',
    Password: ''
  }
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    
  }

// try to log in
OnSubmit() 
{
  this.loginService.login(this.user)
  .subscribe(
    response => {
      console.log(response);  
    }
  );
  this.router.navigate(['register']);
  //user: UserLogin
  // this.loginService.login(user);
}


}
