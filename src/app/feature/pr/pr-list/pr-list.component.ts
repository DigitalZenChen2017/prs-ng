import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from 'src/app/model/purchase-request.class';
import { PrService } from 'src/app/service/pr.service';

@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PrListComponent implements OnInit {
  title: string = 'Purchase Request List';
  purchaserequests: PurchaseRequest[];
  sortCriteria: string = 'purchaserequest';
  sortOrder: string = 'asc';

  constructor(private purchaserequestSvc: PrService) { }

  ngOnInit() {
    this.purchaserequestSvc.list().subscribe(jresp => {
      this.purchaserequests = jresp.data as PurchaseRequest[];
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
