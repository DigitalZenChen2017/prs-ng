import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../../service/vendor.service';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Vendor } from 'src/app/model/vendor.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  title: string = 'Vendor List';
  vendors: Vendor[];
  jr: JsonResponse;
  sortCriteria: string = 'product';
  sortOrder: string = 'asc';


  constructor(private vendorSvc: VendorService) { }

  ngOnInit() {
    this.vendorSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.vendors = this.jr.data as Vendor[];
      console.log(this.vendors);
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
