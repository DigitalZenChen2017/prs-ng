import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../../../model/vendor.class';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  title: string = 'Vendor Create';
  resp: any;
  vendor: Vendor = new Vendor(0, '', '', '', '', '', '', '', '', false);

  constructor(private vendorSvc: VendorService, private router: Router) { }

  ngOnInit() {
  }

  // Vendor Create method
  create() {
    this.vendorSvc.create(this.vendor)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/vendor/list']);
      });
  }

}
