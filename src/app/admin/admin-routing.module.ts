import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';

import { AdminComponent } from './admin.component';
// import { AdminOrdersComponent } from './orders/orders.component';
import { AdminWorkersComponent } from './workers/workers.component';
// import { AdminProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: { title: extract('About') },
    children: [{ path: 'workers', component: AdminWorkersComponent, data: { title: extract('About') } }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AdminRoutingModule {}
