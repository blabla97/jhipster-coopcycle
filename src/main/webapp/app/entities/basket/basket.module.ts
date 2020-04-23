import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angular2-qrcode';

import { CoopcycleSharedModule } from 'app/shared/shared.module';
import { BasketComponent } from './basket.component';
import { BasketDetailComponent } from './basket-detail.component';
import { BasketUpdateComponent } from './basket-update.component';
import { BasketDeleteDialogComponent } from './basket-delete-dialog.component';
import { basketRoute } from './basket.route';

@NgModule({
  imports: [CoopcycleSharedModule, QRCodeModule, RouterModule.forChild(basketRoute)],
  declarations: [BasketComponent, BasketDetailComponent, BasketUpdateComponent, BasketDeleteDialogComponent],
  entryComponents: [BasketDeleteDialogComponent]
})
export class CoopcycleBasketModule {}
