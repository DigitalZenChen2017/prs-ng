import { Component, OnInit } from '@angular/core';
import { Menu } from '../../model/menu.class';
import { SystemService } from '../../service/system.service';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Menu[] = [ // display, href, tooltip
    new Menu('Home', '/home', 'This is the home menu item'),
    new Menu('Login', '/user/login', 'This is the login menu item'),
    new Menu('About', '/about', 'This is the about menu item'),
    new Menu('User', '/user/list', 'This is the user menu item'),
    new Menu('Vendor', '/vendor/list', 'This is the vendor menu item'),
    new Menu('Product', '/product/list', 'This is the product menu item'),
    new Menu('Request', '/purchaserequest/list', 'This is the pr menu item'),
    new Menu('Review', '/purchaserequest/review', 'This is the pr review menu item'),
  ];

  user: User;
  profilePicFileName: string;

  constructor(private systemSvc: SystemService) { }

  ngOnInit() {
    if (this.systemSvc.data.user.loggedIn) {
      this.user = this.systemSvc.data.user.instance;
      console.log("logged in user: ", this.user);
      this.profilePicFileName = this.user.userName;
    } else {
      console.error("User not logged in");
    }
  }

}
