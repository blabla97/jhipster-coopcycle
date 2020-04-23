import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angular2-qrcode';

import { CoopcycleSharedModule } from 'app/shared/shared.module';
import { RestaurantOwnerComponent } from './restaurant-owner.component';
import { RestaurantOwnerDetailComponent } from './restaurant-owner-detail.component';
import { RestaurantOwnerUpdateComponent } from './restaurant-owner-update.component';
import { RestaurantOwnerDeleteDialogComponent } from './restaurant-owner-delete-dialog.component';
import { restaurantOwnerRoute } from './restaurant-owner.route';

@NgModule({
  imports: [CoopcycleSharedModule, QRCodeModule, RouterModule.forChild(restaurantOwnerRoute)],
  declarations: [
    RestaurantOwnerComponent,
    RestaurantOwnerDetailComponent,
    RestaurantOwnerUpdateComponent,
    RestaurantOwnerDeleteDialogComponent
  ],
  entryComponents: [RestaurantOwnerDeleteDialogComponent]
})
export class CoopcycleRestaurantOwnerModule {}
