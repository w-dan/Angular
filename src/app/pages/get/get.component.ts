import { Component, OnInit } from '@angular/core';
import { User } from "../../classes/user";
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private api: ApiService) { }

  users: User[];

  ngOnInit() {}

  getUsers() {
    this.api.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
  }

}