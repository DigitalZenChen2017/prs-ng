import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PrService } from '../../../service/pr.service';
import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';
import { JsonResponse } from '../../../model/json-response.class';

@Component({
  selector: 'app-pr-create',
  templateUrl: './pr-create.component.html',
  styleUrls: ['./pr-create.component.css']
})
export class PrCreateComponent implements OnInit {
  title: string = 'Purchase Request Create';
  jr: JsonResponse;
  purchaserequest: PurchaseRequest = new PurchaseRequest(0, new User(0, '', '', '', '', '', '', false, false), '', '', new Date(), '', '', new Date(), '')
  users: User[];

  constructor(private purchaserequestSvc: PrService, private userSvc: UserService, private router: Router) { }

  // On Page Load - call the list of Users and subscribe them to jr variable as JsonResponse and users as User data type
  ngOnInit() {
    this.userSvc.list()
      .subscribe(jresp => {
        this.jr = jresp as JsonResponse;
        this.users = this.jr.data as User[];
      });
  }

  // Product Create method
  create() {
    this.purchaserequestSvc.create(this.purchaserequest)
      .subscribe(jresp => {
        this.jr = jresp;
        this.router.navigate(['/product/list']);
      });
  }

}
