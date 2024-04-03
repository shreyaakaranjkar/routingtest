import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { UserComponent } from './components/user/user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ProductComponent } from './components/product/product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { PnfComponent } from './components/pnf/pnf.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'users',
    component : UsersComponent,
    children : [
      {
        path : 'addUser',
        component : EditUserComponent
      },
      {
        path : ':userId',
        component : UserComponent
      },
      {
        path : ':userId/edit',
        component : EditUserComponent
      }
    ]
  },
  {
    path : 'products',
    component : ProductsComponent,
    children : [
      {
        path : 'addProduct',
        component : EditProductComponent
      },
      {
        path : ':productId',
        component : ProductComponent
      },
      {
        path : ':productId/edit',
        component : EditProductComponent
      }
    ],
  },
    {
      path : '**',
      redirectTo : 'pnf'
    },
    {
      path:'pnf',
      component : PnfComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
