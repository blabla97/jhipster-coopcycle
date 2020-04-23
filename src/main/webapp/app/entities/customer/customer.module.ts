import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angular2-qrcode';

import { CoopcycleSharedModule } from 'app/shared/shared.module';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerUpdateComponent } from './customer-update.component';
import { CustomerDeleteDialogComponent } from './customer-delete-dialog.component';
import { customerRoute } from './customer.route';

@NgModule({
  imports: [CoopcycleSharedModule, QRCodeModule, RouterModule.forChild(customerRoute)],
  declarations: [CustomerComponent, CustomerDetailComponent, CustomerUpdateComponent, CustomerDeleteDialogComponent],
  entryComponents: [CustomerDeleteDialogComponent]
})
export class CoopcycleCustomerModule {}
