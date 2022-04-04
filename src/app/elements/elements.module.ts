import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { HeaderSliderComponent } from './header-slider/header-slider.component';
import { BodySliderComponent } from './body-slider/body-slider.component';
import { ElementsComponent } from './elements/elements.component';


@NgModule({
  declarations: [
    HeaderSliderComponent,
    BodySliderComponent,
    ElementsComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ]
})
export class ElementsModule { }
