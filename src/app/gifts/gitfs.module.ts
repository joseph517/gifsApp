import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './component/searh-box/search-box.component';
import { CardListComponent } from './component/card-list/card-list.component';
import { CardComponent } from './component/card/card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
