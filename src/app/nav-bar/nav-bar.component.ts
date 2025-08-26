import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
login = true;
  ngOnInit(): void {
  }
    logout(){
      this.login = false;
    }
    status(){
      this.login = !this.login;
    }
}
