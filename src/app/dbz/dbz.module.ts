import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponentDBZ } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponentDBZ,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
