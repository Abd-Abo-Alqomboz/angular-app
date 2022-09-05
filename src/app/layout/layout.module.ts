import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HederComponent } from '../heder/heder.component';
import { FoterComponent } from '../foter/foter.component';



@NgModule({
  declarations: [
    HederComponent,
    FoterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HederComponent,
    FoterComponent
    
  ],
})
export class LayoutModule {
  
 }
