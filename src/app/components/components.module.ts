import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { TitulosComponent } from './titulos/titulos.component';
import { SubtitulosComponent } from './subtitulos/subtitulos.component';
import { TxtComponent } from './txt/txt.component';



@NgModule({
  declarations: [
    NavComponent,
    HijoComponent,
    TitulosComponent,
    SubtitulosComponent,
    TxtComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    NavComponent,
    HijoComponent,
    TitulosComponent,
    SubtitulosComponent,
    TxtComponent
  ]
})
export class ComponentsModule { }
