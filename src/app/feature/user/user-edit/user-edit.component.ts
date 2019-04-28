import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';
import { JsonResponse } from '../../../model/json-response.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  title: string = 'User Edit';

  jr: JsonResponse;
  id: string;
  resp: any;

  user: User;

  constructor(private UserSvc: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log('user edit ngOnInit', 'id = ' + this.id);
    this.UserSvc.get(this.id)
      .subscribe(jrresp => {
        this.jr = jrresp;
        console.log('1');
        this.user = this.jr.data as User;
        console.log('user', this.user);
      });
  }

  edit() {
    console.log('user edit component edit method...');
    this.UserSvc.edit(this.user)
      .subscribe(resp => {
        this.jr = resp;
        this.router.navigate(['/user/list']);
      });
  }


}
