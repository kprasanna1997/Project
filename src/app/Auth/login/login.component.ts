import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  login(loginForm:NgForm) {
    console.log(loginForm.value.role);
    if(loginForm.value.role === "Admin"){
      this.router.navigate(["/product/view"])
    }else{
      this.router.navigate(["/product/home"])
    }
   }
  ngOnInit(): void {
  }

}
