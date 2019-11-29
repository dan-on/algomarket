import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatExpansionModule,
  MatChipsModule,
  MatSliderModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatBadgeModule,
} from '@angular/material';
import { CdkStepperModule } from '@angular/cdk/stepper';

const materialModules = [
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatFormFieldModule,
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  CdkStepperModule,
  MatStepperModule,
  MatExpansionModule,
  MatChipsModule,
  MatSliderModule,
  MatTabsModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatBadgeModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {}