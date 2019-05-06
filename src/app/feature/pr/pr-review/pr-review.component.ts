import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { PurchaseRequest } from 'src/app/model/purchase-request.class';
import { PrService } from 'src/app/service/pr.service';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-pr-review',
  templateUrl: './pr-review.component.html',
  styleUrls: ['./pr-review.component.css']
})
export class PrReviewComponent implements OnInit {
  title: string = 'Purchase Requests In Review';
  purchaserequests: PurchaseRequest[];
  jr: JsonResponse;
  sortCriteria: string = 'purchaserequest';
  sortOrder: string = 'asc';
  loggedInUser: User;

  constructor(private purchaserequestSvc: PrService, private systemSvc: SystemService) { }

  ngOnInit() {
    // sets current user equal to loggedInUser
    if (this.systemSvc.data.user.loggedIn) {
      this.loggedInUser = this.systemSvc.data.user.instance;
      console.log("logged in user: ", this.loggedInUser);
    } else {
      console.error("User not logged in");
    }

    console.log("0");
    this.purchaserequestSvc.listReview(this.loggedInUser.id).subscribe(jresp => {
      console.log("1");
      this.jr = jresp;
      this.purchaserequests = this.jr.data as PurchaseRequest[];
      console.log(this.purchaserequests);
    }
    );
  }

  sortBy(column: string): void {
    if (this.sortCriteria === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }

}
