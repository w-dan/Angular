import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { User } from "../../classes/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() { }

  model = new User();

  login(){
     this.api.login(this.model.mail, this.model.password)
      .subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['books']);
     },
    )
  }
}