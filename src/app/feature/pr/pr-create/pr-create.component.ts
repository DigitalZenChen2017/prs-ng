import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PrService } from '../../../service/pr.service';
import { JsonResponse } from '../../../model/json-response.class';
import { User } from '../../../model/user.class';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-pr-create',
  templateUrl: './pr-create.component.html',
  styleUrls: ['./pr-create.component.css']
})
export class PrCreateComponent implements OnInit {
  title: string = 'Purchase Request Create';
  jr: JsonResponse;
  loggedInUser: User;
  purchaserequest: PurchaseRequest;

  constructor(private purchaserequestSvc: PrService, private router: Router, private systemSvc: SystemService) { }

  // On Page Load - call the list of Users and subscribe them to jr variable as JsonResponse and users as User data type
  ngOnInit() {
    this.loggedInUser = this.systemSvc.data.user.instance;
    this.purchaserequest = new PurchaseRequest(0, this.loggedInUser, '', '', new Date(), '', '', new Date(), '')
    console.log("logged in user on pr-create")
    console.log("this.purchaserequest = ", this.purchaserequest);
  }

  // Purchase Request Create method
  create() {
    this.purchaserequestSvc.submitNew(this.purchaserequest)
      .subscribe(jresp => {
        this.jr = jresp;
        this.router.navigate(['/purchaserequest/list']);
      });
  }

}
