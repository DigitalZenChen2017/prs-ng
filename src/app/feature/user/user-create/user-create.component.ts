import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';
import { JsonResponse } from '../../../model/json-response.class';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  title: string = 'User Create';
  resp: any;
  user: User = new User(0, '', '', '', '', '', '', false, false);
  jr: JsonResponse;

  constructor(private userSvc: UserService, private router: Router) { }

  ngOnInit() {
  }

  // User Create method
  create() {
    this.userSvc.create(this.user)
      .subscribe(resp => {
        this.jr = resp;
        this.router.navigate(['/user/list']);
      });
  }

}
