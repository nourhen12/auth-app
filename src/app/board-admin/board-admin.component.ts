import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/auth/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

}
