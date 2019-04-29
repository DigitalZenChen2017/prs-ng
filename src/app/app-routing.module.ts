import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';

import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';

import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';

import { PrListComponent } from './feature/pr/pr-list/pr-list.component';
import { PrDetailComponent } from './feature/pr/pr-detail/pr-detail.component';
import { PrCreateComponent } from './feature/pr/pr-create/pr-create.component';
import { PrEditComponent } from './feature/pr/pr-edit/pr-edit.component';

import { PrliListComponent } from './feature/prli/prli-list/prli-list.component';
import { PrliCreateComponent } from './feature/prli/prli-create/prli-create.component';
import { PrliEditComponent } from './feature/prli/prli-edit/prli-edit.component';
import { PrliDetailComponent } from './feature/prli/prli-detail/prli-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/list', component: UserListComponent },
  { path: 'user/create', component: UserCreateComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  { path: 'user/details/:id', component: UserDetailComponent },

  { path: 'vendor/list', component: VendorListComponent },
  { path: 'vendor/create', component: VendorCreateComponent },
  { path: 'vendor/edit/:id', component: VendorEditComponent },
  { path: 'vendor/details/:id', component: VendorDetailComponent },

  { path: 'product/list', component: ProductListComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },
  { path: 'product/details/:id', component: ProductDetailComponent },

  { path: 'purchaserequest/list', component: PrListComponent },
  { path: 'purchaserequest/create', component: PrCreateComponent },
  { path: 'purchaserequest/edit/:id', component: PrEditComponent },
  { path: 'purchaserequest/details/:id', component: PrDetailComponent },

  { path: 'purchaserequestlineitem/list', component: PrliListComponent },
  { path: 'purchaserequestlineitem/create', component: PrliCreateComponent },
  { path: 'purchaserequestlineitem/edit/:id', component: PrliEditComponent },
  { path: 'purchaserequestlineitem/details/:id', component: PrliDetailComponent },

  { path: '**', component: UserLoginComponent } // Means any other path goes to the UserListComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
