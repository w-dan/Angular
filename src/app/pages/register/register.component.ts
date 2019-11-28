 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { User } from "src/app/classes/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() { }

  model = new User;

  register() {
      this.api.register(this.model.name, this.model.surname, this.model.mail, this.model.password, this.model.phone)
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['login']);
      }, err => console.log(err)
    );
  }
}