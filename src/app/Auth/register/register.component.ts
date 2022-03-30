import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  constructor(private fb: FormBuilder , private router:Router) {
    this.registerForm = this.fb.group({
      fullName: this.fb.control("", [Validators.required, Validators.pattern(/^[a-z A-Z]+$/)]),
      email: this.fb.control("", [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      age: this.fb.control("", [Validators.required, Validators.pattern(/^[0-9]{2}$/)]),
      password: this.fb.control("", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}$/)]),
      cnfPassword: this.fb.control("", [passwordValidators]),
    }),
      this.registerForm.controls.password.valueChanges
        .subscribe(x => { this.registerForm.controls.cnfPassword.updateValueAndValidity() })
  }

  get fullName() {
    return this.registerForm.get("fullName")
  }
  get email() {
    return this.registerForm.get("email")
  }
  get age() {
    return this.registerForm.get("age")
  }
  get password() {
    return this.registerForm.get("password")
  }
  get cnfPassword() {
    return this.registerForm.get("cnfPassword")
  }
  register() {
    this.router.navigate(["login"])
  }
  ngOnInit(): void {
  }

}

function passwordValidators(control: AbstractControl) {
  if (control && control.value !== null && control.value !== undefined) {
    let cnfPass = control.value;
    let pass = control.root.get("password")
    if (pass) {
      let password = pass.value;
      if (cnfPass !== password) {
        return { isError: true }
      }
    }
  }
  return null
}

