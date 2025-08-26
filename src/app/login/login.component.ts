import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginservService } from './loginserv.service';

@Component({
  selector: 'app-login',
  // templateUrl: './login.component.html',
    templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private service: LoginservService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  sendlogin(){
     this.service.getlogincredentials(this.loginForm.value).subscribe({
       next: (response) => {
         console.log(response);
       },
       error: (error) => {
         console.error(error);
       }
     });
  }

}
